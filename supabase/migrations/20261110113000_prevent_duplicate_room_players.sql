-- Prevent duplicate player entries when a user joins the same room repeatedly.
-- Preserve the best score and host/ready flags while consolidating historical duplicates.
with ranked as (
  select
    id,
    room_id,
    user_id,
    row_number() over (
      partition by room_id, user_id
      order by coalesce(is_host, false) desc, coalesce(score, 0) desc, created_at asc, id asc
    ) as row_num,
    max(coalesce(score, 0)) over (partition by room_id, user_id) as best_score,
    bool_or(coalesce(is_host, false)) over (partition by room_id, user_id) as keep_host,
    bool_or(coalesce(is_ready, false)) over (partition by room_id, user_id) as keep_ready
  from public.room_players
  where user_id is not null
)
delete from public.room_players rp
using ranked r
where rp.id = r.id and r.row_num > 1;

with ranked as (
  select
    id,
    row_number() over (
      partition by room_id, user_id
      order by coalesce(is_host, false) desc, coalesce(score, 0) desc, created_at asc, id asc
    ) as row_num,
    max(coalesce(score, 0)) over (partition by room_id, user_id) as best_score,
    bool_or(coalesce(is_host, false)) over (partition by room_id, user_id) as keep_host,
    bool_or(coalesce(is_ready, false)) over (partition by room_id, user_id) as keep_ready
  from public.room_players
  where user_id is not null
)
update public.room_players rp
set score = r.best_score, is_host = r.keep_host, is_ready = r.keep_ready
from ranked r
where rp.id = r.id and r.row_num = 1;

create unique index if not exists room_players_room_user_unique
  on public.room_players (room_id, user_id);

create or replace function public.join_room(
  p_code text,
  p_display_name text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_room public.rooms;
  v_display_name text;
  v_user_id uuid;
  v_clean_code text;
begin
  v_user_id := auth.uid();
  if v_user_id is null then
    raise exception 'Authentication required to join a room';
  end if;

  v_clean_code := upper(trim(coalesce(p_code, '')));
  v_display_name := trim(coalesce(p_display_name, 'Player'));
  if v_display_name = '' then
    v_display_name := 'Player';
  end if;

  select * into v_room
  from public.rooms
  where upper(room_code) = v_clean_code
  for update;

  if not found then
    raise exception 'Room not found with PIN %', v_clean_code;
  end if;

  if v_room.status = 'finished' then
    raise exception 'This match has already ended';
  end if;

  insert into public.profiles (id, username, full_name)
  values (
    v_user_id,
    'player_' || substring(v_user_id::text, 1, 8),
    v_display_name
  )
  on conflict (id) do update
  set full_name = case
    when public.profiles.full_name is null or public.profiles.full_name = ''
      then excluded.full_name
    else public.profiles.full_name
  end;

  insert into public.room_players (
    room_id, user_id, display_name, is_host, is_ready, score
  )
  values (
    v_room.id,
    v_user_id,
    v_display_name,
    (v_room.host_id = v_user_id),
    false,
    0
  )
  on conflict (room_id, user_id) do update
  set display_name = excluded.display_name;

  return jsonb_build_object(
    'id', v_room.id,
    'code', v_room.room_code,
    'room_code', v_room.room_code,
    'host_id', v_room.host_id,
    'game_slug', v_room.game_id,
    'game_id', v_room.game_id,
    'status', v_room.status
  );
end;
$$;

grant execute on function public.join_room(text, text) to anon, authenticated;
