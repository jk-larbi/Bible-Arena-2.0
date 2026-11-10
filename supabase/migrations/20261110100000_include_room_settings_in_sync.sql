-- Include host-selected multiplayer settings in the sync payload so each room
-- loads the exact number of questions configured by its host.
create or replace function public.get_room_sync(p_room uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_room public.rooms;
  v_players jsonb;
begin
  select * into v_room from public.rooms where id = p_room;
  if not found then return null; end if;

  select coalesce(jsonb_agg(
    jsonb_build_object(
      'id', rp.id,
      'room_id', rp.room_id,
      'user_id', rp.user_id,
      'display_name', rp.display_name,
      'is_ready', rp.is_ready,
      'is_host', rp.is_host,
      'score', rp.score
    ) order by rp.score desc, rp.created_at asc
  ), '[]'::jsonb)
  into v_players
  from public.room_players rp
  where rp.room_id = p_room;

  return jsonb_build_object(
    'room', jsonb_build_object(
      'id', v_room.id,
      'code', v_room.room_code,
      'room_code', v_room.room_code,
      'host_id', v_room.host_id,
      'game_slug', v_room.game_id,
      'game_id', v_room.game_id,
      'status', v_room.status,
      'current_question_index', coalesce(v_room.current_question_index, 0),
      'question_started_at', v_room.question_started_at,
      'question_duration_seconds', coalesce(v_room.question_duration_seconds, 20),
      'reveal_seconds', coalesce(v_room.reveal_seconds, 5),
      'question_ids', coalesce(v_room.question_ids, '{}'),
      'settings', coalesce(v_room.settings, '{}'::jsonb)
    ),
    'players', v_players,
    'server_time', timezone('utc'::text, now())
  );
end;
$$;

grant execute on function public.get_room_sync(uuid) to anon, authenticated;
