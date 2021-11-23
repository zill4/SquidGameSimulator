import { Document } from 'mongoose'
import { Request } from 'express'

/** User Interface */
export interface IUser extends Document {
    name: string
    account: string
    password: string
    role: string
    type: string
    _doc: object
}

export interface ILink extends Document {
    url: string
    name: string
    player: string
    session: string
    _doc: object
}

export interface IFeedback extends Document {
    game: string
    player: string
    session: string
    review: string
    score: number
    read: boolean
    flagged: boolean
    _doc: object
}
export interface IFeedbackParams {
    game: string
    player: string
    session: string
    review: string
    score: number
}
/** User Params Interface */
export interface ILinkParams {
    name:string
    player: string
    session: string
}


/** New User Interface*/
export interface INewUser {
    name: string
    account:string
    password:string
}

/** Decoded Token Interface*/
export interface IDecodedToken {
    id?: string
    newUser?: INewUser
    iat: number
    exp: number
}

/** User Params Interface */
export interface IUserParams {
    name:string
    account: string
    password: string
}

/** Request Auth Interface*/
export interface IReqAuth extends Request {
    user?: IUser
}