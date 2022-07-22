import { startConnection } from '../routers/router.js'
import TruckService from '../service/TruckService.js'

class TruckController {
    async create(req, res) {
        try {
            startConnection()
            const createdTruck = await TruckService.create(req.body)
            return res.json(createdTruck)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            startConnection()
            const posts = await TruckService.getAll()
            return res.json(posts)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            startConnection()
            const post = await TruckService.getOne(id)
            return res.status(200).json(post)
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            startConnection()
            const post = req.body
            const updatedPost = await TruckService.update(post)
            return res.status(200).json(updatedPost)
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            startConnection()
            const { id } = req.params
            const deletedPost = await TruckService.delete(id)
            return res.status(200).json(deletedPost)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new TruckController();