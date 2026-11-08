-- Applied remotely as Supabase migration 20261107190311.
-- Room sync contains player identities and scores: only authenticated room members may read it.
create or replace function public.get_room_sync(p_room uuid)
returns jsonb
language plpgsql
security definer
set search_path=''
as $$
declare v_room public.rooms; v_players jsonb;
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 select * into v_room from public.rooms where id=p_room;
 if not found then raise exception 'Room not found'; end if;
 if not exists(select 1 from public.room_players rp where rp.room_id=p_room and rp.user_id=auth.uid()) then
  raise exception 'You are not a member of this room';
 end if;
 select coalesce(jsonb_agg(jsonb_build_object(
  'id',rp.id,'room_id',rp.room_id,'user_id',rp.user_id,'display_name',rp.display_name,
  'is_ready',rp.is_ready,'is_host',rp.is_host,'score',rp.score
 ) order by rp.score desc,rp.created_at asc),'[]'::jsonb)
 into v_players from public.room_players rp where rp.room_id=p_room;
 return jsonb_build_object(
  'room',jsonb_build_object('id',v_room.id,'code',v_room.room_code,'room_code',v_room.room_code,
   'host_id',v_room.host_id,'game_slug',v_room.game_id,'game_id',v_room.game_id,'status',v_room.status,
   'current_question_index',coalesce(v_room.current_question_index,0),
   'question_started_at',v_room.question_started_at,
   'question_duration_seconds',coalesce(v_room.question_duration_seconds,20),
   'reveal_seconds',coalesce(v_room.reveal_seconds,5),
   'question_ids',coalesce(v_room.question_ids,'{}'),'settings',coalesce(v_room.settings,'{}'::jsonb)),
  'players',v_players,'server_time',clock_timestamp()
 );
end; $$;
revoke all on function public.get_room_sync(uuid) from public,anon;
grant execute on function public.get_room_sync(uuid) to authenticated;
revoke all on public.game_content from anon,authenticated;
grant select on public.game_content_public to anon,authenticated;
