import Token from "../schemas/Token.js"
import jwt from "jsonwebtoken"

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '30m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '3d' })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refrehToken
            return tokenData.save()
        }
        const token = await Token.create({ user: userId, refreshToken })
        return token
    }
}

export default new TokenService()