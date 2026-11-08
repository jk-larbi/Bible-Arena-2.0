-- Backfill profiles for Auth users created before the profile trigger was installed.
insert into public.profiles (id, username, full_name, level, xp, is_guest)
select
  u.id,
  coalesce(
    nullif(u.raw_user_meta_data ->> 'username', ''),
    'player_' || substr(replace(u.id::text, '-', ''), 1, 8)
  ),
  nullif(u.raw_user_meta_data ->> 'full_name', ''),
  1,
  0,
  coalesce(u.is_anonymous, false)
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null
on conflict (id) do nothing;
