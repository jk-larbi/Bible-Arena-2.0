-- Shared board state and server-controlled turn sequencing for board-style multiplayer games.
create table if not exists public.room_board_states (
  room_id uuid primary key references public.rooms(id) on delete cascade,
  board_type text not null check (board_type in ('scramble','crossword','word_search','verse_builder','complete_scripture')),
  board_state jsonb not null default '{}'::jsonb,
  player_order uuid[] not null default '{}',
  current_turn_index integer not null default 1,
  turn_number integer not null default 1,
  revision bigint not null default 0,
  status text not null default 'active' check (status in ('active','completed')),
  updated_at timestamptz not null default now()
);
create table if not exists public.room_board_player_state (
  room_id uuid not null references public.rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  private_state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (room_id,user_id)
);
create table if not exists public.room_board_moves (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  turn_number integer not null,
  move_type text not null,
  move_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique(room_id,turn_number)
);
alter table public.room_board_states enable row level security;
alter table public.room_board_player_state enable row level security;
alter table public.room_board_moves enable row level security;
drop policy if exists room_board_states_member_read on public.room_board_states;
create policy room_board_states_member_read on public.room_board_states for select to authenticated using (public.is_room_member(room_id));
drop policy if exists room_board_player_state_self_read on public.room_board_player_state;
create policy room_board_player_state_self_read on public.room_board_player_state for select to authenticated using (user_id = (select auth.uid()) and public.is_room_member(room_id));
drop policy if exists room_board_moves_member_read on public.room_board_moves;
create policy room_board_moves_member_read on public.room_board_moves for select to authenticated using (public.is_room_member(room_id));
revoke all on public.room_board_states, public.room_board_player_state, public.room_board_moves from anon, authenticated;
grant select on public.room_board_states, public.room_board_moves to authenticated;
grant select on public.room_board_player_state to authenticated;
create or replace function public.start_room_board(p_room uuid, p_board_type text, p_initial_state jsonb, p_player_private_states jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = ''
as $$
declare v_room public.rooms; v_players uuid[]; v_first uuid; v_user uuid := auth.uid();
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 select * into v_room from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if v_room.host_id <> v_user then raise exception 'Only the host can initialize the board'; end if;
 if v_room.status <> 'playing' then raise exception 'Start the room before initializing its board'; end if;
 if p_board_type not in ('scramble','crossword','word_search','verse_builder','complete_scripture') then raise exception 'Unsupported board type'; end if;
 select array_agg(user_id order by created_at) into v_players from public.room_players where room_id=p_room and user_id is not null;
 if coalesce(array_length(v_players,1),0) < 2 then raise exception 'At least two registered players are required'; end if;
 v_first := v_players[1];
 insert into public.room_board_states(room_id,board_type,board_state,player_order,current_turn_index,turn_number,revision,status)
 values(p_room,p_board_type,coalesce(p_initial_state,'{}'::jsonb),v_players,1,1,1,'active')
 on conflict(room_id) do update set board_type=excluded.board_type,board_state=excluded.board_state,player_order=excluded.player_order,current_turn_index=1,turn_number=1,revision=public.room_board_states.revision+1,status='active',updated_at=now();
 delete from public.room_board_player_state where room_id=p_room;
 insert into public.room_board_player_state(room_id,user_id,private_state)
 select p_room,rp.user_id,coalesce(p_player_private_states->rp.user_id::text,'{}'::jsonb)
 from public.room_players rp where rp.room_id=p_room and rp.user_id is not null;
 return jsonb_build_object('room_id',p_room,'board_type',p_board_type,'board_state',coalesce(p_initial_state,'{}'::jsonb),'current_player',v_first,'turn_number',1,'revision',1);
end $$;
create or replace function public.submit_room_board_move(p_room uuid,p_expected_revision bigint,p_move_type text,p_move_payload jsonb,p_private_state jsonb default null)
returns jsonb language plpgsql security definer set search_path = ''
as $$
declare v_state public.room_board_states; v_user uuid := auth.uid(); v_next_user uuid; v_new_revision bigint;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 select * into v_state from public.room_board_states where room_id=p_room for update;
 if not found then raise exception 'Board has not been initialized'; end if;
 if v_state.status <> 'active' then raise exception 'Board is no longer active'; end if;
 if not public.is_room_member(p_room) then raise exception 'You are not a room member'; end if;
 if v_state.player_order[v_state.current_turn_index] <> v_user then raise exception 'It is not your turn'; end if;
 if v_state.revision <> p_expected_revision then raise exception 'The board has changed. Refresh before moving.'; end if;
 if length(coalesce(p_move_type,'')) < 2 or length(p_move_type)>40 then raise exception 'Invalid move type'; end if;
 if p_move_payload is null or jsonb_typeof(p_move_payload) <> 'object' or octet_length(p_move_payload::text)>12000 then raise exception 'Invalid move payload'; end if;
 if exists(select 1 from public.room_board_moves where room_id=p_room and turn_number=v_state.turn_number) then raise exception 'This turn has already been played'; end if;
 update public.room_board_states set board_state=v_state.board_state || jsonb_build_object('last_move',p_move_payload,'last_move_type',p_move_type,'last_player',v_user),
 current_turn_index=case when v_state.current_turn_index >= array_length(v_state.player_order,1) then 1 else v_state.current_turn_index+1 end,
 turn_number=v_state.turn_number+1,revision=v_state.revision+1,updated_at=now()
 where room_id=p_room returning revision into v_new_revision;
 insert into public.room_board_moves(room_id,user_id,turn_number,move_type,move_payload) values(p_room,v_user,v_state.turn_number,p_move_type,p_move_payload);
 if p_private_state is not null then update public.room_board_player_state set private_state=p_private_state,updated_at=now() where room_id=p_room and user_id=v_user; end if;
 select player_order[current_turn_index] into v_next_user from public.room_board_states where room_id=p_room;
 return jsonb_build_object('room_id',p_room,'current_player',v_next_user,'turn_number',v_state.turn_number+1,'revision',v_new_revision);
end $$;
revoke all on function public.start_room_board(uuid,text,jsonb,jsonb) from public,anon;
revoke all on function public.submit_room_board_move(uuid,bigint,text,jsonb,jsonb) from public,anon;
grant execute on function public.start_room_board(uuid,text,jsonb,jsonb) to authenticated;
grant execute on function public.submit_room_board_move(uuid,bigint,text,jsonb,jsonb) to authenticated;
do $$ begin
 if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='room_board_states') then alter publication supabase_realtime add table public.room_board_states; end if;
 if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='room_board_moves') then alter publication supabase_realtime add table public.room_board_moves; end if;
end $$;
