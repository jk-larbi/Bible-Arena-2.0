-- Applied remotely as Supabase migration 20261107190500.
-- Do not expose every room's player identities and scores to every signed-in user.
drop policy if exists "Room players viewable by authenticated users." on public.room_players;
drop policy if exists "Authenticated players can join waiting rooms" on public.room_players;
create policy room_players_member_read
on public.room_players
for select to authenticated
using (public.is_room_member(room_id));
