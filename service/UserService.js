import User from "../schemas/User.js"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import mailService from './MailService.js'
import TokenService from "./TokenService.js"
class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw new Error('The user with this email already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await User.create({ email, password: hashedPassword, activationLink })
        await mailService.sendActivationMail(email, activationLink)
        const tokens = TokenService.generateTokens()
    }
}

export default new UserService()