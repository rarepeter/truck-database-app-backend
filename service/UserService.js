import User from "../schemas/User.js"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import mailService from './MailService.js'
import TokenService from "./TokenService.js"
import UserDto from "../dtos/UserDTO.js"
class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw new Error('The user with this email already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()

        const user = await User.create({ email, password: hashedPassword, activationLink })
        // await mailService.sendActivationMail(email, `${process.env.SRV_ADDRESS}/activate/${activationLink}`)
        
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({ ...userDto })
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return { ...tokens, user: userDto }
    }
    
    async activate(activationLink) {
        const user = await User.findOne({ activationLink })
        if (!user) {
            throw new Error("Invalid activation link")
        }
        user.isActivated = true
        user.save()
    }

    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("User not found")
        }
        const isPassEqual = bcrypt.compare(password, user.password)
        if (!user) {
            throw new Error("Password is incorrect")
        }
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({ ...userDto })

        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken)
        return token
    }
}

export default new UserService()