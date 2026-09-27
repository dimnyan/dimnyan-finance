import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';

const GROK_ENDPOINT = 'https://api.x.ai/v1/chat/completions';
const MAX_STRING_LEN = 200;
const MAX_NUMERIC = 100_000_000;

interface AdviceRequestBody {
    income: string;
    rent?: string;
    expenses?: string;
    debt?: string;
    debtType?: string;
    savings?: string;
    goal?: string;
    currencySymbol?: string;
}

function isValidAmount(v: unknown): v is string {
    if (typeof v !== 'string' || v.trim() === '') return false;
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 && n <= MAX_NUMERIC;
}

function truncate(s: string | undefined, max: number): string {
    return (s ?? '').slice(0, max);
}

export async function POST(req: NextRequest) {
    const ip = getClientIp(req.headers);
    const { success, remaining, reset } = await checkRateLimit(ip);

    if (!success) {
        const retryAfterSec = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
        return NextResponse.json(
            {
                error:
                    "You've hit the free plan limit for now. Please try again later, or check the Free Resources tab in the meantime.",
            },
            { status: 429, headers: { 'Retry-After': String(retryAfterSec) } }
        );
    }

    if (!process.env.GROK_API_KEY) {
        return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    let body: AdviceRequestBody;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { income, rent, expenses, debt, savings, currencySymbol } = body;

    if (!isValidAmount(income)) {
        return NextResponse.json({ error: 'A valid income amount is required' }, { status: 400 });
    }
    for (const [name, val] of Object.entries({ rent, expenses, debt, savings })) {
        if (val !== undefined && val !== '' && !isValidAmount(val)) {
            return NextResponse.json({ error: `Invalid value for ${name}` }, { status: 400 });
        }
    }

    const currency = truncate(currencySymbol, 5) || '$';
    const debtType = truncate(body.debtType, MAX_STRING_LEN);
    const goal = truncate(body.goal, MAX_STRING_LEN);

    const systemPrompt = `
You are a compassionate financial advisor helping low-income families.

Provide a clear, kind, actionable 12-month financial plan including:
1. Recommended budget (50/30/20 or better)
2. Debt payoff strategy (snowball or avalanche)
3. Side hustle ideas under $100 to start
4. Free government or community resources
5. Emergency fund target
6. Credit improvement steps

Be encouraging, realistic, and speak like a trusted friend. Use bullet points.
`;

    const userInput = `
User profile:
- Monthly take-home income: ${currency}${income}
- Rent/Mortgage: ${currency}${rent ?? 'not provided'}
- Total monthly expenses: ${currency}${expenses ?? 'not provided'}
- Current debt: ${currency}${debt ?? '0'} (type: ${debtType || 'various'})
- Savings: ${currency}${savings ?? '0'}
- Goal: ${goal || 'build emergency fund and get out of debt'}
`;

    try {
        const r = await fetch(GROK_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.GROK_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'grok-4.7',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userInput },
                ],
                max_tokens: 900,
                store: false,
            }),
            signal: req.signal, // aborts the upstream call if the client disconnects
        });

        if (!r.ok) {
            const text = await r.text();
            return NextResponse.json({ error: text }, { status: r.status });
        }

        const data = await r.json();
        return NextResponse.json(
            { content: data.choices[0].message.content },
            { headers: { 'X-RateLimit-Remaining': String(remaining) } }
        );
    } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
            // Client disconnected — nothing to send back, nothing to log as a failure.
            return new NextResponse(null, { status: 499 }); // 499: Client Closed Request (nginx convention)
        }
        return NextResponse.json({ error: 'Upstream request failed' }, { status: 502 });
    }
}