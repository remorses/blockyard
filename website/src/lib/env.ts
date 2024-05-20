export const env = {
    PUBLIC_URL: process.env.PUBLIC_URL,
    PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
    LIVEKIT_API_KEY: process.env.LIVEKIT_API_KEY,
    LIVEKIT_API_SECRET: process.env.LIVEKIT_API_SECRET,
}

for (let k in env) {
    if (k.startsWith('PUBLIC_') && !env[k]) {
        throw new Error(`Missing env var ${k}`)
    }
}
