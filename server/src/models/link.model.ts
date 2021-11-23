import mongoose from 'mongoose'
import bcrypt from 'bcrypt' // used to hash users password
import { ILink } from '../config/interface'


            // const { name, player, session } = req.body
            // const { name, account, password } = req.body
// url will need to be updated in the future.
const linkSchema = new mongoose.Schema({
    url: {
        type: String,
        default: process.env.CLIENT_HOST 
    },
    name: {
        type: String,
        required: [true, "Needs game name"],
        trim: true,
    },
    player: {
        type: String, 
        required: [true, "Need player name"],
        trim: true
    },
    session: {
        type: String,
        required: [true, "Need Session"],
        unique: true
    }
}, {
    timestamps: true
})

export default mongoose.model<ILink>('link', linkSchema)