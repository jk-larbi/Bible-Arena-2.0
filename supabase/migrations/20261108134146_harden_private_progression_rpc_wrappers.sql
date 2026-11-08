-- Keep internal helpers inaccessible to API roles; expose only narrow public wrappers.
create or replace function public.get_weekly_arena_standings()
returns table (
  rank integer,
  player_id uuid,
  username text,
  full_name text,
  player_level integer,
  weekly_points bigint,
  levels_played integer,
  games_played integer
)
language sql
security definer
set search_path to ''
as $function$
  select * from private.get_weekly_arena_standings();
$function$;

create or replace function public.claim_daily_mission(p_mission_id text)
returns table (
  mission_id text,
  reward_xp integer,
  total_xp integer,
  player_level integer
)
language sql
security definer
set search_path to ''
as $function$
  select * from private.claim_daily_mission(p_mission_id);
$function$;

revoke execute on function private.get_weekly_arena_standings() from public, anon, authenticated;
revoke execute on function private.claim_daily_mission(text) from public, anon, authenticated;
revoke usage on schema private from anon, authenticated;

revoke execute on function public.get_weekly_arena_standings() from public;
grant execute on function public.get_weekly_arena_standings() to anon, authenticated;
revoke execute on function public.claim_daily_mission(text) from public, anon;
grant execute on function public.claim_daily_mission(text) to authenticated;
