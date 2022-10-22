import TruckService from '../service/TruckService.js'

class TruckController {
    async create(req, res) {
        try {
            const createdTruck = await TruckService.create(req.body)
            console.log(createdTruck)
            req.ui = createdTruck.id
            return res.status(201).json(createdTruck)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const trucks = await TruckService.getAll()
            return res.json(trucks)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const truck = await TruckService.getOne(id)
            return res.status(200).json(truck)
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            const truck = req.body
            const updatedTruck = await TruckService.update(truck)
            return res.status(200).json(updatedTruck)
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const deletedTruck = await TruckService.delete(id)
            return res.status(200).json(deletedTruck)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new TruckController();