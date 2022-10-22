import { v4 as uuidv4 } from 'uuid';

import Delivery from '../schemas/Delivery.js'

class DeliveryService {
    async create(delivery) {
        const { driver: assignedDrivers, truck: assignedTrucks, startTime, endTime } = delivery;
        const newDelivery = {
            id: uuidv4(),
            assignedDrivers,
            assignedTrucks,
            startTime,
            endTime
        }
        const createdDelivery = await Delivery.create(newDelivery)
        return createdDelivery
    }

    async getAll() {
        const deliveries = await Delivery.find()
        return deliveries
    }

    async getOne(id) {
        const delivery = await Delivery.findOne({ id })
        return delivery
    }

    async update(delivery) {
        const id = delivery.id
        const updatedDelivery = await Delivery.findOneAndUpdate({ id }, delivery, { new: true })
        return updatedDelivery
    }

    async delete(id) {
        const deletedDelivery = await Delivery.findOneAndDelete({ id })
        return deletedDelivery
    }
}

export default new DeliveryService();