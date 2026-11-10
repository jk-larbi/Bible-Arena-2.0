-- Restore the table-level privileges required by the multiplayer client.
-- RLS policies continue to enforce host/member ownership on every row.
grant select, insert, update on table public.rooms to authenticated;
grant select, insert, update, delete on table public.room_players to authenticated;
grant select, insert on table public.room_answers to authenticated;
