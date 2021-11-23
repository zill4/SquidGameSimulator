import express from 'express'
import feedbackController from '../controllers/feedback.controller'
import auth from '../middleware/auth'

const router = express.Router()

router.post('/link', feedbackController.createLink)

router.post('/feedback', feedbackController.createFeedback)

/** Not used in this version */
router.patch('/feedback', auth, feedbackController.updateFeedback)

router.get('/feedback', feedbackController.getFeedback)


export default router