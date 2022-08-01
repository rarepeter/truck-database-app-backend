import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const Delivery = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    assignedDrivers: { type: String, required: true },
    assignedTrucks: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
}, { timestamps: true }
)

export default mongoose.model(process.env.DELIVERIES_NS, Delivery)