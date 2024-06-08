export const env = {
    PUBLIC_URL: process.env.PUBLIC_URL,
    PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL,
    PUBLIC_DISABLE_CALL: process.env.PUBLIC_DISABLE_CALL,
    DATABASE_URL: process.env.DATABASE_URL,
    PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
    LIVEKIT_API_KEY: process.env.LIVEKIT_API_KEY,
    LIVEKIT_API_SECRET: process.env.LIVEKIT_API_SECRET,
}

for (let k in env) {
    if (k.startsWith('PUBLIC_') && env[k] == null) {
        throw new Error(`Missing env var ${k}`)
    }
}
