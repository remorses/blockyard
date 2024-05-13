import { shell } from '@xmorse/deployment-utils/src'
import { Prisma, prisma } from '../prisma'

const str = [
    Prisma.sql`grant usage on schema public to postgres, anon, authenticated, service_role;`,
    Prisma.sql`grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;`,
    Prisma.sql`grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;`,
    Prisma.sql`grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;`,
    Prisma.sql`alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;`,
    Prisma.sql`alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;`,
    Prisma.sql`alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;`,
]
async function main() {
    for (let line of str) {
        await prisma.$executeRaw(line)
    }
}
main()
