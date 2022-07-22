import { v4 as uuidv4 } from 'uuid';

import Truck from '../schemas/Truck.js'

class TruckService {
    async create(truck) {
        const newTruck = {
            id: uuidv4(),
            ...truck
        }
        const createdTruck = await Truck.create(newTruck)
        return createdTruck
    }

    async getAll() {
        const posts = await Truck.find()
        return posts
    }

    async getOne(id) {
        const post = await Truck.findOne({ id })
        return post
    }

    async update(post) {
        const id = post.id
        const updatedPost = await Truck.findOneAndUpdate({ id }, post, { new: true })
        return updatedPost
    }

    async delete(id) {
        const deletedPost = await Truck.findOneAndDelete({ id })
        return deletedPost
    }
}

export default new TruckService();