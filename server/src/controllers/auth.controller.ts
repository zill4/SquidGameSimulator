import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { publicKey } from '../config/keys'

import Users from '../models/user.model'
import { IDecodedToken, IUser, IUserParams } from '../config/interface'
import { generateAccessToken, generateRefreshToken } from '../config/generateToken'


const authController = {

    /** Regiser Account */
    register: async (req: Request, res: Response) => {

        try {

            const { name, account, password } = req.body

            const user = await Users.findOne({ account })

            if (user) {
                return res.status(400).json({ msg: 'Email already exists.' })
            }

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = { name, account, password: passwordHash }

            registerUser(newUser, res);
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    },
    /** Login  */
    login: async (req: Request, res: Response) => {

        try {

            const { account, password } = req.body

            const user = await Users.findOne({ account })

            if (!user) {
                return res.status(400).json({ msg: 'This account does not exist.' })
            }

            loginUser(user, password, res)
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    },
    /** logout */
    logout: async (req: Request, res: Response) => {

        try {

            res.clearCookie('refreshToken', { path: `/api/refresh_token` })
            return res.json({ msg: 'logged out' })
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    },
    /** Refresh Token */
    refreshToken: async (req: Request, res: Response) => {
        try {
            const rf_token = req.cookies.refreshToken

            if (!rf_token) return res.status(400).json({ msg: "Please login now!" })

            const decoded = <IDecodedToken>jwt.verify(rf_token, `${publicKey}`)
            if (!decoded.id) return res.status(400).json({ msg: "Please login now!" })

            const user = await Users.findById(decoded.id).select("-password")
            if (!user) return res.status(400).json({ msg: "This account does not exist." })

            const access_token = generateAccessToken({ id: user._id })

            res.json({ access_token, user })
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

const loginUser = async (user: IUser, password: string, res: Response) => {

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return res.status(400).json({ msg: 'Incorrect password' })
    }

    const access_token = generateAccessToken({ id: user._id })
    const refresh_token = generateRefreshToken({ id: user._id })

    res.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        path: `/api/refresh_token`,
        maxAge: 99999999
    })

    res.json({
        msg: 'Login success',
        access_token,
        user: { ...user._doc, password: '' }
    })

}

const registerUser = async (user: IUserParams, res: Response) => {

    const newUser = new Users(user)
    try {
        await newUser.save()
    } catch (e: any) {
        console.log(e)
        return;
    }

    const access_token = generateAccessToken({ id: newUser._id })
    const refresh_token = generateRefreshToken({ id: newUser._id })

    /** The token process needs to be updated along with the keys, leaning towards .env variables */
    res.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        path: `/api/refresh_token`,
        maxAge: 9999999
    })

    res.json({
        msg: 'Login success',
        access_token,
        user: { ...newUser._doc, password: '' }
    })
}

export default authController