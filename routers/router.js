import Router from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from 'multer'

import TruckController from '../controllers/TruckController.js'
import DriverController from '../controllers/DriverController.js'
import DeliveryController from '../controllers/DeliveryController.js'

import fs from 'fs'

dotenv.config()

const URI = process.env.TRUCKS_DB_URI

const router = new Router()

const startConnection = () => {
    try {
        mongoose.connect(URI)
        console.log('Connected')
    } catch (e) {
        console.log(e)
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./images`)
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '.png')
    }
})

const upload = multer({ storage: storage })

router.post('/upload-image', upload.single('image'), (req, res) => {
    if (req.file) {
        fs.renameSync(req.file.path, 'images/' + req.body.id + '.png');
    }
    console.log(req.file)
    return res.status(201)
})

router.post('/trucks', TruckController.create)
router.get('/trucks', TruckController.getAll)
router.get('/trucks/:id', TruckController.getOne)
router.put('/trucks', TruckController.update)
router.delete('/trucks/:id', TruckController.delete)

router.post('/drivers', DriverController.create)
router.get('/drivers', DriverController.getAll)
router.get('/drivers/:id', DriverController.getOne)
router.put('/drivers', DriverController.update)
router.delete('/drivers/:id', DriverController.delete)

router.post('/deliveries', DeliveryController.create)
router.get('/deliveries', DeliveryController.getAll)
router.get('/deliveries/:id', DeliveryController.getOne)
router.put('/deliveries', DeliveryController.update)
router.delete('/deliveries/:id', DeliveryController.delete)

export default router;
export { startConnection }