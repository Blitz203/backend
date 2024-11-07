// utils/tokenUtils.js
import jwt from "jsonwebtoken";
import config from "../config/config";
import { personel } from "@prisma/client";

export function generateAccessToken(user: personel) {
  if (!config.jwtSecret) {
    throw new Error("JWT secret not set");
  }
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: config.accessTokenExpiration,
    subject: user.id.toString(),
  });
}

export function generateRefreshToken(user: personel) {
  if (!config.jwtSecret) {
    throw new Error("JWT secret not set");
  }
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: config.refreshTokenExpiration,
    subject: user.id.toString(),
  });
}