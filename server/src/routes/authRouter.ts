import express from 'express'
import authController from '../controllers/auth.controller'
import { validRegister } from '../middleware/validate'

const router = express.Router()

router.post('/register', validRegister, authController.register)

router.post('/login', authController.login)

router.get('/logout', authController.logout)

router.get('/refresh_token', authController.refreshToken)

export default router