-- Enforce server timer, retain the shared move history, and score verified board answers.
create or replace function public.submit_room_board_move(p_room uuid,p_expected_revision bigint,p_move_type text,p_move_payload jsonb,p_private_state jsonb default null)
returns jsonb language plpgsql security definer set search_path = ''
as $$
declare v_state public.room_board_states; v_room public.rooms; v_user uuid := auth.uid(); v_next_user uuid; v_question_id text; v_correct_answer text; v_answer text; v_is_correct boolean := false; v_marks integer := 0; v_score integer := 0; v_new_revision bigint; v_move jsonb;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 select * into v_state from public.room_board_states where room_id=p_room for update;
 if not found then raise exception 'Board has not been initialized'; end if;
 if v_state.status <> 'active' then raise exception 'Board is no longer active'; end if;
 if not public.is_room_member(p_room) then raise exception 'You are not a room member'; end if;
 if v_state.player_order[v_state.current_turn_index] <> v_user then raise exception 'It is not your turn'; end if;
 if v_state.revision <> p_expected_revision then raise exception 'The board has changed. Refresh before moving.'; end if;
 if p_move_type <> 'answer' then raise exception 'Unsupported move. Submit a completed board answer.'; end if;
 if p_move_payload is null or jsonb_typeof(p_move_payload) <> 'object' or octet_length(p_move_payload::text)>12000 then raise exception 'Invalid move payload'; end if;
 v_answer := trim(coalesce(p_move_payload->>'answer',''));
 if v_answer = '' or length(v_answer)>500 then raise exception 'Enter an answer before submitting'; end if;
 select * into v_room from public.rooms where id=p_room;
 if v_room.status <> 'playing' or v_room.question_started_at is null or now() > v_room.question_started_at + make_interval(secs => coalesce(v_room.question_duration_seconds,20)) then raise exception 'The question timer has ended'; end if;
 v_question_id := v_room.question_ids[v_room.current_question_index+1];
 select gc.correct_answer into v_correct_answer from public.game_content gc where gc.id=v_question_id;
 if v_correct_answer is null then select qk.answer into v_correct_answer from public.question_keys qk where qk.question_id=v_question_id; end if;
 if v_correct_answer is null then raise exception 'The current question has no verified answer key'; end if;
 v_is_correct := lower(regexp_replace(v_answer,'\s+','','g')) = lower(regexp_replace(v_correct_answer,'\s+','','g'));
 v_marks := case when v_is_correct then 10 else 0 end;
 update public.room_players set score=coalesce(score,0)+v_marks where room_id=p_room and user_id=v_user returning score into v_score;
 v_move := jsonb_build_object('player_id',v_user,'answer',v_answer,'is_correct',v_is_correct,'marks_awarded',v_marks,'turn_number',v_state.turn_number);
 update public.room_board_states set board_state=v_state.board_state || jsonb_build_object('last_move',v_move,'last_player',v_user,'moves',coalesce(v_state.board_state->'moves','[]'::jsonb) || jsonb_build_array(v_move)),current_turn_index=case when v_state.current_turn_index >= array_length(v_state.player_order,1) then 1 else v_state.current_turn_index+1 end,turn_number=v_state.turn_number+1,revision=v_state.revision+1,updated_at=now() where room_id=p_room returning revision into v_new_revision;
 insert into public.room_board_moves(room_id,user_id,turn_number,move_type,move_payload) values(p_room,v_user,v_state.turn_number,p_move_type,v_move);
 if p_private_state is not null then update public.room_board_player_state set private_state=p_private_state,updated_at=now() where room_id=p_room and user_id=v_user; end if;
 select player_order[current_turn_index] into v_next_user from public.room_board_states where room_id=p_room;
 return jsonb_build_object('room_id',p_room,'current_player',v_next_user,'turn_number',v_state.turn_number+1,'revision',v_new_revision,'is_correct',v_is_correct,'marks_awarded',v_marks,'current_score',coalesce(v_score,0),'moves',coalesce(v_state.board_state->'moves','[]'::jsonb) || jsonb_build_array(v_move));
end $$;
revoke all on function public.submit_room_board_move(uuid,bigint,text,jsonb,jsonb) from public,anon;
grant execute on function public.submit_room_board_move(uuid,bigint,text,jsonb,jsonb) to authenticated;