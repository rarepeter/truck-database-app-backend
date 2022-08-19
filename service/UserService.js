import User from "../schemas/User.js"

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw new Error('The user with this email already exists')
        }
        const user = await User.create({ email, password })
    }
}

export default new UserService()