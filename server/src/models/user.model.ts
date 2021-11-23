import mongoose from 'mongoose'
import { IUser } from '../config/interface'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a username"],
        trim: true,
        maxlength: [20, "Username cannot be greater than 20 characters"]
    },
    account: {
        type: String, 
        required: [true, "Please add email"],
        trim: true, 
        unique: true
    },
    password: {
        type: String,
        required: [true, "please add a password"]
    },
    role: {
        type: String,
        default: 'user' 
    },
    type: {
        type:String,
        default: 'register' 
    }
}, {
    timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)
