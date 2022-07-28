import { startConnection } from '../routers/router.js'
import DriverService from '../service/DriverService.js'

class DriverController {
    async create(req, res) {
        try {
            startConnection()
            const createdDriver = await DriverService.create(req.body)
            return res.status(201).json(createdDriver)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            startConnection()
            const drivers = await DriverService.getAll()
            return res.json(drivers)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            startConnection()
            const driver = await DriverService.getOne(id)
            return res.status(200).json(driver)
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            startConnection()
            const driver = req.body
            const updatedDriver = await DriverService.update(driver)
            return res.status(200).json(updatedDriver)
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            startConnection()
            const { id } = req.params
            const deletedDriver = await DriverService.delete(id)
            return res.status(200).json(deletedDriver)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new DriverController();