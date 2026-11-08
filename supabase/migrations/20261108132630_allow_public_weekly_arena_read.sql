-- Weekly standings contain only public profile fields and aggregate competition totals.
-- Allow visitors to view the public weekly cup without needing to sign in.
grant usage on schema private to anon;
grant execute on function private.get_weekly_arena_standings() to anon;
grant execute on function public.get_weekly_arena_standings() to anon;
