import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthUser { id: string; email: string; username: string }
export interface AuthRequest extends Request { user?: AuthUser }

const secret = () => {
  const value = process.env.JWT_SECRET;
  if (!value || value.length < 32) throw new Error("JWT_SECRET must contain at least 32 characters.");
  return value;
};

export function signToken(user: AuthUser) {
  return jwt.sign({ sub: user.id, email: user.email, username: user.username }, secret(), { expiresIn: "7d", issuer: "biblearena-api" });
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "Authentication required." });
  try {
    const payload = jwt.verify(token, secret(), { issuer: "biblearena-api" }) as jwt.JwtPayload;
    if (!payload.sub || !payload.email || !payload.username) return res.status(401).json({ error: "Invalid session." });
    req.user = { id: String(payload.sub), email: String(payload.email), username: String(payload.username) };
    next();
  } catch {
    return res.status(401).json({ error: "Session expired or invalid. Please sign in again." });
  }
}
