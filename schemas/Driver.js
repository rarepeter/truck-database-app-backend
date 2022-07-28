import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const Driver = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passportId: { type: String, required: true },
    assignedTrucks: { type: Array, default: [] },
    picture: { type: String },
}, { timestamps: true }
)

export default mongoose.model(process.env.DRIVERS_NS, Driver)