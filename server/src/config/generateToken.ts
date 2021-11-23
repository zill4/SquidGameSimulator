import jwt from 'jsonwebtoken'
import { privateKey } from './keys'


export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, `${privateKey}`, {algorithm: "RS256", expiresIn: '15m'})
}

export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, `${privateKey}`, {algorithm: "RS256", expiresIn: '30d'})
}

