create or replace function public.get_daily_verse_secrets()
returns jsonb
language sql
security definer
set search_path = ''
as $function$
  select jsonb_build_object(
    'vapid_private_key', (select decrypted_secret from vault.decrypted_secrets where name = 'biblearena_vapid_private_key' limit 1),
    'cron_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'biblearena_daily_verse_cron_secret' limit 1)
  );
$function$;
revoke all on function public.get_daily_verse_secrets() from public, anon, authenticated;
grant execute on function public.get_daily_verse_secrets() to service_role;

select cron.unschedule(jobid) from cron.job where jobname = 'biblearena-daily-verse';
select cron.schedule(
  'biblearena-daily-verse',
  '0 6 * * *',
  $job$
    select net.http_post(
      url := 'https://cbbtqsjcsttguukfgnvw.supabase.co/functions/v1/daily-bible-verse',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || coalesce((select decrypted_secret from vault.decrypted_secrets where name = 'biblearena_daily_verse_cron_secret' limit 1), '')
      ),
      body := '{}'::jsonb,
      timeout_milliseconds := 10000
    );
  $job$
);
