-- Give every game its own unlockable achievement badge.
insert into public.achievement_definitions(id, game_id, title, description, icon_emoji)
values
 ('game-scripture-challenge','scripture-challenge','Scripture Challenger','Complete a Scripture Challenge level.','📖'),
 ('game-bible-character-quest','bible-character-quest','Character Witness','Complete a Bible Character Quest level.','🧑‍⚖️'),
 ('game-scripture-scramble','scripture-scramble','Word Shuffler','Complete a Scripture Scramble level.','🔤'),
 ('game-bible-word-search','bible-word-search','Hidden Word Hunter','Complete a Bible Word Search level.','🔎'),
 ('game-bible-crossword','bible-crossword','Crossword Master','Complete a Bible Crossword level.','🧩'),
 ('game-who-said-it','who-said-it','Voice of Scripture','Complete a Who Said It level.','🗣️'),
 ('game-complete-the-scripture','complete-the-scripture','Verse Restorer','Complete a Complete the Scripture level.','✍️'),
 ('game-bible-match-up','bible-match-up','Perfect Match','Complete a Bible Match-Up level.','🔗'),
 ('game-bible-timeline','bible-timeline','Keeper of Time','Complete a Bible Timeline level.','⌛'),
 ('game-bible-puzzles','bible-puzzles','Sacred Puzzle Solver','Complete a Bible Puzzles level.','🧩'),
 ('game-find-the-bible-book','find-the-bible-book','Book Finder','Complete a Find the Bible Book level.','📚'),
 ('game-bible-riddles','bible-riddles','Riddle Solver','Complete a Bible Riddles level.','❓'),
 ('game-bible-geography-quest','bible-geography-quest','Atlas Explorer','Complete a Bible Geography Quest level.','🧭'),
 ('game-bible-memory-challenge','bible-memory-challenge','Memory Keeper','Complete a Bible Memory Challenge level.','🧠'),
 ('game-old-vs-new-testament','old-vs-new-testament','Testament Expert','Complete an Old vs New Testament level.','📜'),
 ('game-bible-detective','bible-detective','Bible Detective','Complete a Bible Detective level.','🕵️'),
 ('game-bible-chain-challenge','bible-chain-challenge','Chain Champion','Complete a Bible Chain Challenge level.','⛓️'),
 ('game-verse-builder','verse-builder','Verse Architect','Complete a Verse Builder level.','🧱'),
 ('game-guess-the-emoji','guess-the-emoji','Emoji Interpreter','Complete a Guess the Emoji level.','💡')
on conflict (id) do update
set game_id=excluded.game_id,title=excluded.title,description=excluded.description,icon_emoji=excluded.icon_emoji;

create or replace function private.award_game_completion_achievement()
returns trigger
language plpgsql
security definer
set search_path to ''
as $$
begin
  if new.completed then
    insert into public.achievements(user_id, achievement_id)
    select new.user_id, 'game-' || new.game_slug
    where exists (
      select 1 from public.achievement_definitions ad
      where ad.id = 'game-' || new.game_slug
    )
    on conflict (user_id, achievement_id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists award_game_completion_achievement on public.level_progress;
create trigger award_game_completion_achievement
after insert or update of completed on public.level_progress
for each row execute function private.award_game_completion_achievement();

insert into public.achievements(user_id, achievement_id)
select distinct lp.user_id, 'game-' || lp.game_slug
from public.level_progress lp
join public.achievement_definitions ad on ad.id = 'game-' || lp.game_slug
where lp.completed
on conflict (user_id, achievement_id) do nothing;
