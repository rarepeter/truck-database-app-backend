import Router from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import TruckController from '../controllers/TruckController.js'
import DriverController from '../controllers/DriverController.js'
import DeliveryController from '../controllers/DeliveryController.js'

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