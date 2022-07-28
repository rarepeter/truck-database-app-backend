import { v4 as uuidv4 } from 'uuid';

import Truck from '../schemas/Truck.js'

class TruckService {
    async create(truck) {
        console.log(truck)
        const { truckBrand: brand, truckModel: model, truckEngine: engine, truckLicensePlate: licensePlate, truckColor: color } = truck;
        const newTruck = {
            id: uuidv4(),
            brand,
            model,
            engine,
            licensePlate,
            color
        }
        const createdTruck = await Truck.create(newTruck)
        return createdTruck
    }

    async getAll() {
        const trucks = await Truck.find()
        return trucks
    }

    async getOne(id) {
        const truck = await Truck.findOne({ id })
        return truck
    }

    async update(truck) {
        const id = truck.id
        const updatedTruck = await Truck.findOneAndUpdate({ id }, truck, { new: true })
        return updatedTruck
    }

    async delete(id) {
        const deletedTruck = await Truck.findOneAndDelete({ id })
        return deletedTruck
    }
}

export default new TruckService();