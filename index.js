import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routers/router.js'

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Refresh succesful on port ${PORT}!`)
})

//
import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('image'), (req, res) => {
    res.status(201)
    console.log(req.file)
})
