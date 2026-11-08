-- Keep the legacy room-advance RPC compatible while routing all clients
-- through the canonical transition that also settles multiplayer score awards.
create or replace function public.advance_question(p_room uuid, p_from_index integer)
returns public.rooms
language sql
security invoker
set search_path = ''
as $$
  select public.advance_room_question(p_room, p_from_index);
$$;

revoke all on function public.advance_question(uuid, integer) from public, anon;
grant execute on function public.advance_question(uuid, integer) to authenticated;
