import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"
import morgan from 'morgan'
import routes from './routes'

/** Middleware */
const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
  })
);

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
/** Routes */
app.use('/api', routes.authRouter)
app.use('/api', routes.userRouter)
app.use('/api', routes.feedbackRouter)


/** Database */
import './config/database'


/** Start server */
const PORT = process.env.PORT || 4200
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

