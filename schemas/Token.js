import mongoose from 'mongoose'

const Token = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true }
}, { collection: 'tokens' })

export default mongoose.model('Token', Token);