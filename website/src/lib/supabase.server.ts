import { createServerClient, parse, serialize } from '@supabase/ssr';
import { env } from '~/lib/env';


export const getSupabaseEnv = () => ({
  SUPABASE_URL: env.PUBLIC_SUPABASE_URL!,
  SUPABASE_ANON_KEY: env.PUBLIC_SUPABASE_ANON_KEY!,
});

export function getSupabaseWithHeaders({ request }: { request: Request }) {
  const cookies = parse(request.headers.get('Cookie') ?? '');
  const headers = new Headers();

  const supabase = createServerClient(
    env.PUBLIC_SUPABASE_URL!,
    env.PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append('Set-Cookie', serialize(key, value, options));
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options));
        },
      },
      auth: {
        detectSessionInUrl: true,
        flowType: 'pkce',
      },
    }
  );

  return { supabase, headers };
}

export async function getSupabaseWithSessionHeaders({
  request,
}: {
  request: Request;
}) {
  const { supabase, headers } = getSupabaseWithHeaders({
    request,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session, headers, supabase };
}
