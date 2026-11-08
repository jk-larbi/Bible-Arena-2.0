import "dotenv/config";
import http from "node:http";
import crypto from "node:crypto";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Server } from "socket.io";
import { z } from "zod";
import { pool } from "./db.js";
import { authenticate, signToken, type AuthRequest, type AuthUser } from "./security.js";

const app = express();
const server = http.createServer(app);
const origins = (process.env.FRONTEND_ORIGINS || "http://localhost:3000").split(",").map(v => v.trim()).filter(Boolean);
const io = new Server(server, { cors: { origin: origins, methods: ["GET", "POST"] } });

app.use(helmet());
app.use(cors({ origin: origins, credentials: false }));
app.use(express.json({ limit: "1mb" }));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false }));

const asyncRoute = (fn: (req: AuthRequest, res: express.Response) => Promise<unknown>) =>
  (req: AuthRequest, res: express.Response, next: express.NextFunction) => { Promise.resolve(fn(req, res)).catch(next); };
const cleanUser = (row: any): AuthUser => ({ id: row.id, email: row.email, username: row.username });
const registerSchema = z.object({ email: z.string().email().max(254), username: z.string().trim().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/), password: z.string().min(8).max(72), displayName: z.string().trim().min(1).max(60).optional() });
const loginSchema = z.object({ email: z.string().email().max(254), password: z.string().min(1).max(72) });

app.get("/api/health", asyncRoute(async (_req, res) => {
  await pool.query("select 1");
  res.json({ ok: true, service: "biblearena-api", database: "connected", timestamp: new Date().toISOString() });
}));

app.post("/api/auth/register", asyncRoute(async (req, res) => {
  const input = registerSchema.parse(req.body);
  const email = input.email.toLowerCase();
  const username = input.username.toLowerCase();
  const passwordHash = await bcrypt.hash(input.password, 12);
  const client = await pool.connect();
  try {
    await client.query("begin");
    const result = await client.query(
      "insert into app_users(email, username, password_hash) values($1,$2,$3) returning id,email,username",
      [email, username, passwordHash]
    );
    const user = result.rows[0];
    await client.query("insert into profiles(user_id, username, full_name) values($1,$2,$3)", [user.id, username, input.displayName || input.username]);
    await client.query("commit");
    const safe = cleanUser(user);
    res.status(201).json({ user: safe, token: signToken(safe) });
  } catch (error: any) {
    await client.query("rollback");
    if (error.code === "23505") return res.status(409).json({ error: "That email or username is already registered." });
    throw error;
  } finally { client.release(); }
}));

app.post("/api/auth/login", asyncRoute(async (req, res) => {
  const input = loginSchema.parse(req.body);
  const result = await pool.query("select id,email,username,password_hash from app_users where email=$1 and is_active=true", [input.email.toLowerCase()]);
  const row = result.rows[0];
  if (!row || !(await bcrypt.compare(input.password, row.password_hash))) return res.status(401).json({ error: "Incorrect email or password." });
  const user = cleanUser(row);
  await pool.query("update app_users set last_login_at=now() where id=$1", [user.id]);
  res.json({ user, token: signToken(user) });
}));

app.get("/api/auth/me", authenticate, asyncRoute(async (req, res) => res.json({ user: req.user })));

app.get("/api/profile", authenticate, asyncRoute(async (req, res) => {
  const result = await pool.query("select p.user_id as id,p.username,p.full_name,p.avatar_url,p.level,p.xp,p.created_at from profiles p where p.user_id=$1", [req.user!.id]);
  if (!result.rowCount) return res.status(404).json({ error: "Profile not found." });
  res.json({ profile: result.rows[0] });
}));
app.patch("/api/profile", authenticate, asyncRoute(async (req, res) => {
  const input = z.object({ fullName: z.string().trim().min(1).max(60).optional(), avatarUrl: z.string().url().max(500).nullable().optional() }).parse(req.body);
  const result = await pool.query(
    "update profiles set full_name=coalesce($2,full_name), avatar_url=case when $3::boolean then $4 else avatar_url end where user_id=$1 returning user_id as id,username,full_name,avatar_url,level,xp",
    [req.user!.id, input.fullName ?? null, Object.hasOwn(input, "avatarUrl"), input.avatarUrl ?? null]
  );
  res.json({ profile: result.rows[0] });
}));

app.get("/api/progress", authenticate, asyncRoute(async (req, res) => {
  const result = await pool.query("select game_id,current_level,max_level_completed,best_score,total_attempts,stars,best_time_ms,updated_at from game_progress where user_id=$1 order by game_id", [req.user!.id]);
  res.json({ progress: result.rows });
}));
app.put("/api/progress/:gameId", authenticate, asyncRoute(async (req, res) => {
  const gameId = z.string().min(1).max(80).parse(req.params.gameId);
  const input = z.object({ currentLevel: z.number().int().min(1).max(1000).optional(), maxLevelCompleted: z.number().int().min(0).max(1000).optional(), bestScore: z.number().int().min(0).max(100000000).optional(), totalAttempts: z.number().int().min(0).max(10000000).optional(), stars: z.number().int().min(0).max(3000).optional(), bestTimeMs: z.number().int().min(0).max(86400000).optional() }).parse(req.body);
  const values = [req.user!.id, gameId, input.currentLevel ?? 1, input.maxLevelCompleted ?? 0, input.bestScore ?? 0, input.totalAttempts ?? 0, input.stars ?? 0, input.bestTimeMs ?? 0];
  const result = await pool.query(`insert into game_progress(user_id,game_id,current_level,max_level_completed,best_score,total_attempts,stars,best_time_ms)
    values($1,$2,$3,$4,$5,$6,$7,$8) on conflict(user_id,game_id) do update set
    current_level=greatest(game_progress.current_level,excluded.current_level),
    max_level_completed=greatest(game_progress.max_level_completed,excluded.max_level_completed),
    best_score=greatest(game_progress.best_score,excluded.best_score),
    total_attempts=greatest(game_progress.total_attempts,excluded.total_attempts),
    stars=greatest(game_progress.stars,excluded.stars),
    best_time_ms=case when game_progress.best_time_ms=0 then excluded.best_time_ms when excluded.best_time_ms=0 then game_progress.best_time_ms else least(game_progress.best_time_ms,excluded.best_time_ms) end,
    updated_at=now() returning *`, values);
  res.json({ progress: result.rows[0] });
}));

app.get("/api/leaderboard", asyncRoute(async (req, res) => {
  const gameId = typeof req.query.gameId === "string" ? req.query.gameId.slice(0,80) : null;
  const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 100);
  const result = await pool.query(`select p.username,p.full_name,p.avatar_url,p.level,coalesce(sum(s.score),0)::bigint as total_score,count(s.id)::int as games_played
    from profiles p left join scores s on s.user_id=p.user_id and ($1::text is null or s.game_id=$1)
    group by p.user_id order by total_score desc limit $2`, [gameId, limit]);
  res.json({ leaderboard: result.rows });
}));
app.post("/api/scores", authenticate, asyncRoute(async (req, res) => {
  const input = z.object({ gameId: z.string().min(1).max(80), score: z.number().int().min(0).max(100000000) }).parse(req.body);
  const result = await pool.query("insert into scores(user_id,game_id,score) values($1,$2,$3) returning id,game_id,score,created_at", [req.user!.id,input.gameId,input.score]);
  res.status(201).json({ score: result.rows[0] });
}));

app.post("/api/rooms", authenticate, asyncRoute(async (req, res) => {
  const input = z.object({ gameId: z.string().min(1).max(80), maxRounds: z.number().int().min(1).max(100).default(5), questionDurationSeconds: z.number().int().min(5).max(180).default(20), settings: z.record(z.unknown()).default({}) }).parse(req.body);
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";\n  const code = Array.from({ length: 6 }, () => alphabet[crypto.randomInt(0, alphabet.length)]).join("");
  const client = await pool.connect();
  try {
    await client.query("begin");
    const room = await client.query("insert into rooms(room_code,host_id,game_id,settings,max_rounds,question_duration_seconds) values($1,$2,$3,$4,$5,$6) returning *", [code,req.user!.id,input.gameId,input.settings,input.maxRounds,input.questionDurationSeconds]);
    await client.query("insert into room_players(room_id,user_id,display_name,is_host,is_ready) values($1,$2,$3,true,true)", [room.rows[0].id,req.user!.id,req.user!.username]);
    await client.query("commit");
    res.status(201).json({ room: room.rows[0], joinUrl: `${process.env.ROOM_JOIN_BASE_URL || ""}/${code}` });
  } catch(e) { await client.query("rollback"); throw e; } finally { client.release(); }
}));
app.get("/api/rooms/:code", asyncRoute(async (req,res) => {
  const code = z.string().regex(/^\d{4,6}$/).parse(req.params.code);
  const room = await pool.query("select id,room_code,game_id,settings,status,current_round,max_rounds,question_duration_seconds,created_at from rooms where room_code=$1 and status<>'finished'",[code]);
  if (!room.rowCount) return res.status(404).json({error:"Room not found or already finished."});
  const players = await pool.query("select id,display_name,score,is_ready,is_host from room_players where room_id=$1 order by created_at",[room.rows[0].id]);
  res.json({room:room.rows[0],players:players.rows});
}));
app.post("/api/rooms/:code/join", authenticate, asyncRoute(async (req,res) => {
  const code=z.string().regex(/^\d{4,6}$/).parse(req.params.code);
  const displayName=z.string().trim().min(1).max(40).parse(req.body.displayName || req.user!.username);
  const room=(await pool.query("select id,status from rooms where room_code=$1",[code])).rows[0];
  if(!room || room.status!=="waiting") return res.status(409).json({error:"This room is unavailable or has already started."});
  await pool.query("insert into room_players(room_id,user_id,display_name) values($1,$2,$3) on conflict(room_id,user_id) do update set display_name=excluded.display_name",[room.id,req.user!.id,displayName]);
  const players=await pool.query("select id,display_name,score,is_ready,is_host from room_players where room_id=$1 order by created_at",[room.id]);
  io.to(room.id).emit("room:players",players.rows);
  res.json({roomId:room.id,players:players.rows});
}));
app.post("/api/rooms/:code/ready", authenticate, asyncRoute(async(req,res)=>{
  const ready=z.boolean().parse(req.body.ready);
  const room=(await pool.query("select id from rooms where room_code=$1 and status='waiting'",[req.params.code])).rows[0];
  if(!room) return res.status(404).json({error:"Waiting room not found."});
  const update=await pool.query("update room_players set is_ready=$3 where room_id=$1 and user_id=$2 returning id",[room.id,req.user!.id,ready]);
  if(!update.rowCount) return res.status(404).json({error:"You are not a member of this room."});
  const players=await pool.query("select id,display_name,score,is_ready,is_host from room_players where room_id=$1 order by created_at",[room.id]);
  io.to(room.id).emit("room:players",players.rows); res.json({players:players.rows});
}));
app.post("/api/rooms/:code/start", authenticate, asyncRoute(async(req,res)=>{
  const client=await pool.connect();
  try {
    await client.query("begin");
    const room=(await client.query("select id,status from rooms where room_code=$1 and host_id=$2 for update",[req.params.code,req.user!.id])).rows[0];
    if(!room) { await client.query("rollback"); return res.status(404).json({error:"Host room not found."}); }
    if(room.status!=="waiting") { await client.query("rollback"); return res.status(409).json({error:"Room has already started."}); }
    const players=(await client.query("select count(*)::int as count from room_players where room_id=$1",[room.id])).rows[0].count;
    if(players<2) { await client.query("rollback"); return res.status(409).json({error:"At least two players are required."}); }
    await client.query("update rooms set status='playing',question_started_at=now() where id=$1",[room.id]);
    await client.query("commit");
    io.to(room.id).emit("room:started",{roomId:room.id});
    res.json({ok:true,roomId:room.id});
  } catch(e){await client.query("rollback");throw e;} finally{client.release();}
}));

app.get("/api/notifications", authenticate, asyncRoute(async(req,res)=>{
  const rows=await pool.query("select id,title,message,type,reference_id,is_read,created_at from notifications where user_id=$1 order by created_at desc limit 100",[req.user!.id]);
  res.json({notifications:rows.rows});
}));
app.patch("/api/notifications/:id/read", authenticate, asyncRoute(async(req,res)=>{
  const id=z.string().uuid().parse(req.params.id);
  const result=await pool.query("update notifications set is_read=true,read_at=now() where id=$1 and user_id=$2 returning id",[id,req.user!.id]);
  if(!result.rowCount) return res.status(404).json({error:"Notification not found."});
  res.json({ok:true});
}));

io.use((socket,next)=>{
  try {
    const token=socket.handshake.auth?.token;
    if(!token) return next(new Error("Authentication required"));
    const payload=jwt.verify(token,process.env.JWT_SECRET || "",{issuer:"biblearena-api"}) as jwt.JwtPayload;
    if(!payload.sub) return next(new Error("Invalid token"));
    socket.data.userId=String(payload.sub); socket.data.username=String(payload.username || "Player"); next();
  } catch { next(new Error("Invalid or expired session")); }
});
io.on("connection",(socket)=>{
  socket.on("room:join",async({code}:{code:string},ack?:(v:any)=>void)=>{
    try {
      if(!/^\d{4,6}$/.test(code)) throw new Error("Invalid room code");
      const room=(await pool.query("select id,room_code,status from rooms where room_code=$1 and status<>'finished'",[code])).rows[0];
      if(!room) throw new Error("Room not found");
      const member=await pool.query("select 1 from room_players where room_id=$1 and user_id=$2",[room.id,socket.data.userId]);
      if(!member.rowCount) throw new Error("Join this room through the API first");
      await socket.join(room.id);
      const players=await pool.query("select id,display_name,score,is_ready,is_host from room_players where room_id=$1 order by created_at",[room.id]);
      ack?.({ok:true,room,players:players.rows});
      socket.to(room.id).emit("room:presence",{userId:socket.data.userId,online:true});
    } catch(e:any){ack?.({ok:false,error:e.message});}
  });
  socket.on("disconnect",()=>{});
});

app.use((err:any,_req:express.Request,res:express.Response,_next:express.NextFunction)=>{
  if(err instanceof z.ZodError) return res.status(400).json({error:"Invalid request.",details:err.issues.map(i=>({path:i.path,message:i.message}))});
  console.error(err);
  res.status(500).json({error:process.env.NODE_ENV==="production"?"An unexpected server error occurred.":err.message});
});

const port=Number(process.env.PORT)||4000;
server.listen(port,"0.0.0.0",()=>console.log(`BibleArena API listening on ${port}`));
