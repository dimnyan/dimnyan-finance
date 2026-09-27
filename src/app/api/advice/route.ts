import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {income, rent, expenses, debt, debtType, savings, goal, currencySymbol} = body;

    if (!process.env.GROK_API_KEY) {
        return NextResponse.json({error: 'Server not configured'}, {status: 500});
    }

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
- Monthly take-home income: ${currencySymbol}${income}
- Rent/Mortgage: ${currencySymbol}${rent}
- Total monthly expenses: ${currencySymbol}${expenses}
- Current debt: ${currencySymbol}${debt} (type: ${debtType || 'various'})
- Savings: ${currencySymbol}${savings}
- Goal: ${goal || 'build emergency fund and get out of debt'}
    `

    try {
        const r = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.GROK_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "model": 'grok-4.7',
                "messages": [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: userInput
                    },
                ],
                "store": false
            }),
        });

        if (!r.ok) {
            const text = await r.text();
            return NextResponse.json({error: text}, {status: r.status});
        }

        const data = await r.json();
        return NextResponse.json({content: data.choices[0].message.content});
    } catch {
        return NextResponse.json({error: 'Upstream request failed'}, {status: 502});
    }
}