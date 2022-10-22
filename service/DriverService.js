import { v4 as uuidv4 } from 'uuid';

import Driver from '../schemas/Driver.js'

class DriverService {
    async create(driver) {
        const { firstName, lastName, passportId } = driver;
        const newDriver = {
            id: uuidv4(),
            firstName,
            lastName,
            passportId
        }
        const createdDriver = await Driver.create(newDriver)
        return createdDriver
    }

    async getAll() {
        const drivers = await Driver.find()
        return drivers
    }

    async getOne(id) {
        const driver = await Driver.findOne({ id })
        return driver
    }

    async update(driver) {
        const id = driver.id
        const updatedDriver = await Driver.findOneAndUpdate({ id }, driver, { new: true })
        return updatedDriver
    }

    async delete(id) {
        const deletedDriver = await Driver.findOneAndDelete({ id })
        return deletedDriver
    }
}

export default new DriverService();