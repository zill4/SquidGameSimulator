import mongoose from 'mongoose'
import bcrypt from 'bcrypt' // used to hash users password
import { IFeedback } from '../config/interface'


const feedbackSchema = new mongoose.Schema({
    game: {
        type: String,
        required: [true, "Needs game name"],
    },
    player: {
        type: String,
        required: [true, "Needs player name"],
        trim: true,
    },
    session: {
        type: String, 
        required: [true, "Need session id"],
        unique: true
    },
    review: {
        type: String,
    },
    score: {
        type: Number,
        required: [true, "Need a score"],
    },
    read: {
        type: Boolean,
        default: false
    },
    flagged: {
        type: Boolean,
        default: false 
    }
}, {
    timestamps: true
})

export default mongoose.model<IFeedback>('feedback', feedbackSchema)