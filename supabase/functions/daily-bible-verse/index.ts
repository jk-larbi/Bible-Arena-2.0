import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const VAPID_PUBLIC_KEY = "BGY2Tr833_ez4qC5WkUZRJ0bhpICsvJw8I6tj2X0lfU9klOdWBy3IjqCjbYyVdGcX18pMHy0PgyOdcQ2pDKOyy0";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SECRET_KEYS = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}");
const SERVICE_KEY = SECRET_KEYS.default ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
if (!SERVICE_KEY) throw new Error("Supabase service key is unavailable.");

const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const VERSES = [
  { reference: "Psalm 23:1", text: "The LORD is my shepherd; I shall not want." },
  { reference: "Proverbs 3:5-6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths." },
  { reference: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles." },
  { reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
  { reference: "Joshua 1:9", text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest." },
  { reference: "Romans 8:28", text: "And we know that all things work together for good to them that love God." },
  { reference: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." },
  { reference: "Matthew 5:16", text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven." },
  { reference: "2 Timothy 1:7", text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
  { reference: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path." },
];

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
});

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  const { data: secrets, error: secretError } = await admin.rpc("get_daily_verse_secrets");
  if (secretError || !secrets?.vapid_private_key || !secrets?.cron_secret) {
    console.error("Daily verse secrets unavailable", secretError);
    return json({ error: "Daily verse push secrets have not been configured." }, 503);
  }
  if (req.headers.get("authorization") !== `Bearer ${secrets.cron_secret}`) return json({ error: "Unauthorized" }, 401);

  const dateKey = new Date().toISOString().slice(0, 10);
  const dayNumber = Math.floor(Date.now() / 86400000);
  const verse = VERSES[((dayNumber % VERSES.length) + VERSES.length) % VERSES.length];
  const title = "BibleArena Daily Verse";
  const message = `${verse.reference} — ${verse.text}`;
  webpush.setVapidDetails("mailto:support@biblearena.app", VAPID_PUBLIC_KEY, secrets.vapid_private_key);

  const [{ data: subscriptions, error: subscriptionsError }, { data: preferences, error: preferencesError }] = await Promise.all([
    admin.from("push_subscriptions").select("id,user_id,subscription"),
    admin.from("notification_preferences").select("user_id,browser_push_enabled,daily_verse_enabled"),
  ]);
  if (subscriptionsError || preferencesError) return json({ error: "Could not load subscribers" }, 500);

  const prefByUser = new Map((preferences ?? []).map((p: any) => [p.user_id, p]));
  const recipients = (subscriptions ?? []).filter((row: any) => {
    const pref: any = prefByUser.get(row.user_id);
    return pref?.browser_push_enabled !== false && pref?.daily_verse_enabled !== false &&
      row.subscription?.endpoint && row.subscription?.keys?.p256dh && row.subscription?.keys?.auth;
  });
  if (!recipients.length) return json({ sent: 0, date: dateKey, reference: verse.reference });

  const { data: existing, error: existingError } = await admin.from("daily_verse_deliveries")
    .select("user_id").eq("verse_date", dateKey).in("user_id", recipients.map((r: any) => r.user_id));
  if (existingError) return json({ error: "Could not check daily delivery history" }, 500);
  const alreadySent = new Set((existing ?? []).map((r: any) => r.user_id));
  const fresh = recipients.filter((r: any) => !alreadySent.has(r.user_id));
  if (!fresh.length) return json({ sent: 0, skipped: recipients.length, date: dateKey });

  const { data: reserved, error: reserveError } = await admin.from("daily_verse_deliveries")
    .upsert(fresh.map((r: any) => ({ user_id: r.user_id, verse_date: dateKey, verse_reference: verse.reference })),
      { onConflict: "user_id,verse_date", ignoreDuplicates: true }).select("user_id");
  if (reserveError) return json({ error: "Could not reserve daily verse deliveries" }, 500);
  const reservedUsers = new Set((reserved ?? []).map((r: any) => r.user_id));
  const sendRows = fresh.filter((r: any) => reservedUsers.has(r.user_id));
  if (!sendRows.length) return json({ sent: 0, date: dateKey });

  const { error: notificationError } = await admin.from("notifications").insert(sendRows.map((r: any) => ({
    user_id: r.user_id, title, message, type: "daily_verse", reference_id: verse.reference,
  })));
  if (notificationError) console.error("Could not save in-app daily verses", notificationError);

  const outcomes = await Promise.allSettled(sendRows.map((row: any) => webpush.sendNotification(row.subscription,
    JSON.stringify({ title, body: message, link: "/notifications", icon: "/assets/bible-arena-logo.png" }),
    { TTL: 86400, urgency: "normal" })));
  const expiredIds: string[] = [];
  let sent = 0;
  outcomes.forEach((outcome, index) => {
    if (outcome.status === "fulfilled") sent++;
    else {
      const statusCode = (outcome.reason as any)?.statusCode;
      if (statusCode === 404 || statusCode === 410) expiredIds.push(sendRows[index].id);
      console.error("Push delivery failed", statusCode ?? outcome.reason);
    }
  });
  if (expiredIds.length) await admin.from("push_subscriptions").delete().in("id", expiredIds);
  return json({ sent, failed: outcomes.length - sent, date: dateKey, reference: verse.reference });
});
