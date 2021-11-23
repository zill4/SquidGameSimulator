import { Request, Response } from 'express'
import Links from '../models/link.model'
import Feedbacks from '../models/feedback.model'
import { ILinkParams, IFeedbackParams, IReqAuth } from '../config/interface'

const feedbackController = {

    /** create link */
    createLink: async (req: Request, res: Response) => {

        try {
            const { name, player, session } = req.body

            const link = await Links.findOne({ session })
            const playerLinks = await Links.find({ player })


            playerLinks.forEach(l => {
                if (l.session === session) {
                    return res.status(400).json({ msg: 'Game sesion already linked' })
                }
            })
            const newLink = { name, player, session }

            completeLink(newLink, res);
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    },
    createFeedback: async (req: Request, res: Response) => {
        try {
            const { game, player, session, review, score } = req.body

            const playerFeedbacks = await Feedbacks.find({ player })

            playerFeedbacks.forEach(f => {
                if (f.session === session) {
                    return res.status(400).json({ msg: 'Game sesion feedback already given' })
                }
            })

            const newFeedback = { game, player, session, review, score }

            completeFeedback(newFeedback, res);
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateFeedback: async (req: IReqAuth, res: Response) => {

        if (!req.user) {
            return res.status(400).json({ msg: "Invalid Authentication" })
        }

        try {
            const { read, flagged, feedbackId } = req.body

            await Feedbacks.findOneAndUpdate({ _id: feedbackId }, {
                read: true,
                flagged: flagged
            })

            res.json({ msg: "Update successful" })
        } catch (error: any) {
            return res.status(500).json({ msg: "Invalid Authentication" })
        }
    },
    getFeedback: async (req: Request, res: Response) => {
        try {
            const feedbacks = await Feedbacks.find()
            res.json(feedbacks)
        } catch (error: any) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

const completeLink = async (link: ILinkParams, res: Response) => {

    const linkUrl = `${process.env.CLIENT_HOST}/feedback?game=${link.name}&player=${link.player}&session=${link.session}`
    const newLink = new Links({
        url: linkUrl,
        name: link.name,
        player: link.player,
        session: link.session
    })
    try {
        await newLink.save()
    } catch (e: any) {
        console.log(e)
        return;
    }

    res.json({
        msg: 'Link created',
        linkUrl
    })
}

const completeFeedback = async (feedback: IFeedbackParams, res: Response) => {


    const newFeedback = new Feedbacks(feedback)
    try {
        await newFeedback.save()
    } catch (e: any) {
        console.log(e)
        return;
    }

    res.json({
        msg: 'Thanks for leaving feedback!'
    })
}

export default feedbackController
