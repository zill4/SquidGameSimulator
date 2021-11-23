import { ChangeEvent, FormEvent } from 'react'
import rootReducer from '../redux/reducers/index'

export type RootStore = ReturnType<typeof rootReducer>

export type InputChange = ChangeEvent<
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
>
export type FormSubmit = FormEvent<HTMLFormElement>

export interface IUserLogin {
  account: string
  password: string
}

export interface IUserRegister extends IUserLogin {
  name: string
  cf_password: string
}
export interface IUserProfile {
  name: string
  role: string
  type: string
}
export interface IUser extends IUserLogin {
  createdAt: string
  name: string
  role: string
  type: string
  updatedAt: string
  _id: string
}

export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}

export interface IFeedback {
  _id?: string
  game: string
  session: string
  player: string
  review?: string
  score: number
  read: boolean
  flagged: boolean
  createdAt?: string
}