export const env = {
    PUBLIC_URL: process.env.PUBLIC_URL,
    PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
}

for (let k in env) {
    if (k.startsWith('PUBLIC_') && !env[k]) {
        throw new Error(`Missing env var ${k}`)
    }
}
