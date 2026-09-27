import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const hasUpstash =
    !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

// Production-grade: distributed, works across serverless instances.
const redisLimiter = hasUpstash
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(1, '1 h'), // 5 requests per hour per IP
        analytics: true,
        prefix: 'advice-ratelimit',
    })
    : null;

// Dev fallback only: per-instance memory, NOT safe for multi-instance prod.
const memoryStore = new Map<string, { count: number; resetAt: number }>();
const MEMORY_LIMIT = 1;
const MEMORY_WINDOW_MS = 60 * 60 * 1000;

function memoryLimit(key: string) {
    const now = Date.now();
    const entry = memoryStore.get(key);
    if (!entry || now > entry.resetAt) {
        memoryStore.set(key, { count: 1, resetAt: now + MEMORY_WINDOW_MS });
        return { success: true, remaining: MEMORY_LIMIT - 1, reset: now + MEMORY_WINDOW_MS };
    }
    if (entry.count >= MEMORY_LIMIT) {
        return { success: false, remaining: 0, reset: entry.resetAt };
    }
    entry.count += 1;
    return { success: true, remaining: MEMORY_LIMIT - entry.count, reset: entry.resetAt };
}

export async function checkRateLimit(identifier: string) {
    if (redisLimiter) {
        const { success, remaining, reset } = await redisLimiter.limit(identifier);
        return { success, remaining, reset };
    }
    return memoryLimit(identifier);
}

export function getClientIp(headers: Headers): string {
    const forwarded = headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();
    return headers.get('x-real-ip') ?? 'unknown';
}