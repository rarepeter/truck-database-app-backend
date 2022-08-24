import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routers/router.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_ADDRESS
}))
app.use(express.json())
app.use(express.static('images'))
app.use(cookieParser())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Refresh succesful on port ${PORT}!`)
})
