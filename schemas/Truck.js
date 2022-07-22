import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const Truck = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    engine: { type: String, required: true },
    picture: { type: String }
})

export default mongoose.model(process.env.TRUCKS_NS, Truck)