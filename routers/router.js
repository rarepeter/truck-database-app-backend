import Router from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from 'multer'

import TruckController from '../controllers/TruckController.js'
import DriverController from '../controllers/DriverController.js'
import DeliveryController from '../controllers/DeliveryController.js'
import UserController from '../controllers/UserController.js'

import fs from 'fs'

dotenv.config()

const URI = process.env.TRUCKS_DB_URI

const router = new Router()

const startConnection = (req, res, next) => {
    try {
        mongoose.connect(URI)
        console.log('Connected')
        next()
    } catch (e) {
        console.log(e)
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./images/avatars`)
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '.png')
    }
})

const upload = multer({ storage: storage })

router.post('/upload-avatar', upload.single('image'), (req, res) => {
    if (req.file) {
        fs.renameSync(req.file.path, 'images/avatars/' + req.body.id + '-avatar.png');
    }
    return res.status(201)
})

router.post('/trucks', startConnection, TruckController.create)
router.get('/trucks', startConnection, TruckController.getAll)
router.get('/trucks/:id', startConnection, TruckController.getOne)
router.put('/trucks', startConnection, TruckController.update)
router.delete('/trucks/:id', startConnection, TruckController.delete)

router.post('/drivers', startConnection, DriverController.create)
router.get('/drivers', startConnection, DriverController.getAll)
router.get('/drivers/:id', startConnection, DriverController.getOne)
router.put('/drivers', startConnection, DriverController.update)
router.delete('/drivers/:id', startConnection, DriverController.delete)

router.post('/deliveries', startConnection, DeliveryController.create)
router.get('/deliveries', startConnection, DeliveryController.getAll)
router.get('/deliveries/:id', startConnection, DeliveryController.getOne)
router.put('/deliveries', startConnection, DeliveryController.update)
router.delete('/deliveries/:id', startConnection, DeliveryController.delete)

router.post('/sign-up', startConnection, UserController.registration)
router.post('/login', startConnection, UserController.login)
router.post('/logout', startConnection, UserController.logout)
router.get('/activate/:link', startConnection, UserController.activate)
router.get('/refresh', startConnection, UserController.refresh)

export default router;
export { startConnection }