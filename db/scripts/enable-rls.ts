import { Prisma, prisma } from '../prisma'

const str = [
    Prisma.sql`
    DO $$
    DECLARE
        r RECORD;
    BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
            EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY;', r.tablename);
        END LOOP;
    END
    $$;
    `,
]
async function main() {
    for (let line of str) {
        await prisma.$executeRaw(line)
    }
}
main()
