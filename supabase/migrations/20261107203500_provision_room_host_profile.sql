-- Anonymous/authenticated hosts need a profiles row before rooms.host_id can be inserted.
-- join_room already provisions profiles for guests; keep host creation symmetric.
create or replace function public.create_room(
  p_display_name text,
  p_game_slug text,
  p_settings jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_code text;
  v_room_id uuid;
  v_chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  v_loop integer := 0;
  v_user_id uuid := auth.uid();
  v_display_name text;
  i integer;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;
  if p_game_slug is null or btrim(p_game_slug) = '' then
    raise exception 'Game is required';
  end if;
  if p_display_name is not null and char_length(btrim(p_display_name)) > 80 then
    raise exception 'Display name is too long';
  end if;

  v_display_name := coalesce(nullif(btrim(p_display_name), ''), 'Player');

  -- Ensure the host profile exists before inserting rooms.host_id.
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

  loop
    v_code := '';
    for i in 1..6 loop
      v_code := v_code || substr(v_chars, floor(random() * length(v_chars) + 1)::integer, 1);
    end loop;
    exit when not exists (
      select 1 from public.rooms r where r.room_code = v_code
    );
    v_loop := v_loop + 1;
    if v_loop > 100 then
      raise exception 'Could not generate unique room code';
    end if;
  end loop;

  insert into public.rooms (room_code, host_id, game_id, settings, status)
  values (v_code, v_user_id, p_game_slug, coalesce(p_settings, '{}'::jsonb), 'waiting')
  returning id into v_room_id;

  insert into public.room_players (room_id, user_id, display_name, is_host, is_ready)
  values (v_room_id, v_user_id, v_display_name, true, true);

  return jsonb_build_object(
    'id', v_room_id,
    'code', v_code,
    'host_id', v_user_id,
    'status', 'waiting'
  );
end;
$$;

revoke all on function public.create_room(text, text, jsonb) from public, anon;
grant execute on function public.create_room(text, text, jsonb) to authenticated;
