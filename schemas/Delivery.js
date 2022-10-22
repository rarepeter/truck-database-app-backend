import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const Delivery = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    assignedDrivers: { type: String, required: true },
    assignedTrucks: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
}, { timestamps: true, collection: 'deliveries' }
)

export default mongoose.model("Delivery", Delivery)