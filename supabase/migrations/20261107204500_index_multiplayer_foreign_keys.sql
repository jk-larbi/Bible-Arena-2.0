-- Cover the multiplayer foreign keys used for host-room and player-answer lookups.
create index if not exists rooms_host_id_idx
  on public.rooms (host_id);

create index if not exists room_answers_user_id_idx
  on public.room_answers (user_id);
