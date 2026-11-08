-- Keep the privileged mission-reward implementation outside the exposed API schema.
create or replace function private.claim_daily_mission(p_mission_id text)
returns table(mission_id text, reward_xp integer, total_xp integer, player_level integer)
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_day date := (now() at time zone 'UTC')::date;
  v_day_start timestamptz := date_trunc('day', now() at time zone 'UTC') at time zone 'UTC';
  v_distinct_levels integer := 0;
  v_distinct_games integer := 0;
  v_has_80 boolean := false;
  v_has_perfect boolean := false;
  v_reward integer;
  v_claim_id uuid;
  v_xp integer;
  v_level integer;
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  select count(distinct (la.game_slug, la.level))::integer,
         count(distinct la.game_slug)::integer,
         coalesce(bool_or(la.percent >= 80), false),
         coalesce(bool_or(la.percent >= 100), false)
  into v_distinct_levels, v_distinct_games, v_has_80, v_has_perfect
  from public.level_attempts la
  where la.user_id = auth.uid() and la.status = 'completed' and la.completed_at >= v_day_start;

  case p_mission_id
    when 'finish-one-level' then
      if v_distinct_levels < 1 then raise exception 'Complete one level first'; end if;
      v_reward := 50;
    when 'play-two-games' then
      if v_distinct_games < 2 then raise exception 'Complete levels in two different games first'; end if;
      v_reward := 75;
    when 'score-80-percent' then
      if not v_has_80 then raise exception 'Earn at least 80%% in a level first'; end if;
      v_reward := 100;
    when 'finish-three-levels' then
      if v_distinct_levels < 3 then raise exception 'Complete three different levels first'; end if;
      v_reward := 150;
    when 'perfect-level' then
      if not v_has_perfect then raise exception 'Complete a level with 100%% first'; end if;
      v_reward := 200;
    else
      raise exception 'Unknown daily mission';
  end case;

  insert into public.daily_mission_claims(user_id, mission_date, mission_id, reward_xp)
  values (auth.uid(), v_day, p_mission_id, v_reward)
  on conflict (user_id, mission_date, mission_id) do nothing
  returning id into v_claim_id;
  if v_claim_id is null then raise exception 'This daily mission has already been claimed'; end if;

  update public.profiles
  set xp = coalesce(xp, 0) + v_reward,
      level = ((coalesce(xp, 0) + v_reward) / 500) + 1
  where id = auth.uid()
  returning xp, level into v_xp, v_level;
  if not found then raise exception 'Player profile not found'; end if;
  return query select p_mission_id, v_reward, v_xp, v_level;
end;
$function$;

revoke all on function private.claim_daily_mission(text) from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.claim_daily_mission(text) to authenticated;

create or replace function public.claim_daily_mission(p_mission_id text)
returns table(mission_id text, reward_xp integer, total_xp integer, player_level integer)
language sql
security invoker
set search_path to ''
as $function$
  select * from private.claim_daily_mission(p_mission_id);
$function$;

revoke all on function public.claim_daily_mission(text) from public, anon;
grant execute on function public.claim_daily_mission(text) to authenticated;
