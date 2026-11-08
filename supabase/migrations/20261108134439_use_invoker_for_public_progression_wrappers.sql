-- Public wrappers run with caller privileges; only their narrowly-scoped private
-- helpers receive the minimum permissions needed. The private schema is not exposed
-- through the Supabase Data API.
alter function public.get_weekly_arena_standings() security invoker;
alter function public.claim_daily_mission(text) security invoker;

grant usage on schema private to anon, authenticated;
grant execute on function private.get_weekly_arena_standings() to anon, authenticated;
grant execute on function private.claim_daily_mission(text) to authenticated;

revoke execute on function private.claim_daily_mission(text) from anon;
revoke execute on function public.claim_daily_mission(text) from public, anon;
grant execute on function public.claim_daily_mission(text) to authenticated;
revoke execute on function public.get_weekly_arena_standings() from public;
grant execute on function public.get_weekly_arena_standings() to anon, authenticated;
