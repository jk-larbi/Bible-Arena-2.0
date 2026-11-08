# BibleArena Custom Backend

This is the first migration layer for replacing Supabase/Firebase with a custom Node.js API, Socket.IO and Neon PostgreSQL.

## Important migration status

This backend is deliberately additive. It does **not** remove or replace the existing frontend integrations yet. The current React app imports Supabase from multiple places and has existing auth, room, notifications, progress and game flows. Switching the UI before the API adapters and data migration are completed would break the live site.

The first release provides:
- Email/password registration and login with bcrypt password hashing and signed JWTs.
- Profile read/update.
- Game progress read/write.
- Score submission and leaderboard reads.
- Room creation, authenticated joining, ready state and host start.
- Socket.IO authenticated room presence and room player updates.
- Notification listing and mark-as-read.
- PostgreSQL schema compatible with the app's core concepts.

The existing 19 game implementations and question content remain in the frontend. Do not delete the Supabase/Firebase packages or configuration until the frontend migration and data verification are complete.

## Local setup (Windows PowerShell)

From the repository root:

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Create a Neon project and database, copy its pooled connection string into `DATABASE_URL` in `backend/.env`. Generate a random secret of 32+ characters for `JWT_SECRET`. Set `FRONTEND_ORIGINS=http://localhost:3000`.

Run the schema once in the Neon SQL Editor using `database/schema.sql`.

Then run:

```powershell
npm run dev
```

Check `http://localhost:4000/api/health`.

## Deploy

### Neon
1. Create a project at https://neon.com/.
2. Create a database and copy the pooled connection string.
3. Run `database/schema.sql` in Neon SQL Editor.
4. Keep the connection string private; never prefix it with VITE_.

### Render
1. Create a Web Service at https://render.com/.
2. Connect this GitHub repository and set Root Directory to `backend`.
3. Build command: `npm install && npm run build`.
4. Start command: `npm start`.
5. Add environment variables: `DATABASE_URL`, `JWT_SECRET`, `FRONTEND_ORIGINS` (your exact Vercel domain), `ROOM_JOIN_BASE_URL` (your exact Vercel /join path), `NODE_ENV=production`.
6. Deploy and check `https://YOUR-RENDER-SERVICE.onrender.com/api/health`.

Render free web services may sleep when idle. The first request after idle can be slow. Socket.IO disconnect/reconnect behavior must be handled by the client.

## API contract

All authenticated endpoints require `Authorization: Bearer <token>`.

- `POST /api/auth/register` { email, username, password, displayName? }
- `POST /api/auth/login` { email, password }
- `GET /api/auth/me`
- `GET /api/profile`; `PATCH /api/profile`
- `GET /api/progress`; `PUT /api/progress/:gameId`
- `GET /api/leaderboard?gameId=&limit=`; `POST /api/scores`
- `POST /api/rooms`; `GET /api/rooms/:code`; `POST /api/rooms/:code/join`
- `POST /api/rooms/:code/ready`; `POST /api/rooms/:code/start`
- `GET /api/notifications`; `PATCH /api/notifications/:id/read`

Socket.IO:
- Connect with `auth: { token }`.
- Emit `room:join` with `{ code }`.
- Listen for `room:players`, `room:started`, and `room:presence`.

## Critical remaining migration work

This is not yet a drop-in replacement for every existing Supabase/Firebase call. Before production cutover:
1. Inventory and migrate each frontend data call into a typed API client.
2. Migrate existing Supabase user IDs/passwordless accounts and data. Password hashes cannot be exported from Supabase Auth; existing users may need a password reset or account-claim flow.
3. Import the current question bank and validate answer formats for all 19 games.
4. Move authoritative multiplayer question selection, timers, answer validation and scoring to server-side game services. Do not trust client-submitted scores.
5. Add challenge CRUD, achievement unlocks, push subscription delivery, password reset/email verification, account recovery and audit logs.
6. Add automated tests for registration, authorization, room isolation, concurrency, scoring and all 19 games.
7. Update frontend auth, notifications, profile, progress, leaderboard and multiplayer hooks to use this API. Only then remove Supabase/Firebase code and environment variables.

Never deploy with a weak JWT secret, expose DATABASE_URL in Vite variables, or trust client-side score values for competitive leaderboards.
