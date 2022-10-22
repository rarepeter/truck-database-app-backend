import DeliveryService from '../service/DeliveryService.js'

class DeliveryController {
    async create(req, res) {
        try {
            const createdDelivery = await DeliveryService.create(req.body)
            return res.status(201).json(createdDelivery)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const delivery = await DeliveryService.getAll()
            return res.json(delivery)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const delivery = await DeliveryService.getOne(id)
            return res.status(200).json(delivery)
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            const delivery = req.body
            const updatedDelivery = await DeliveryService.update(delivery)
            return res.status(200).json(updatedDelivery)
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const deletedDelivery = await DeliveryService.delete(id)
            return res.status(200).json(deletedDelivery)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new DeliveryController();