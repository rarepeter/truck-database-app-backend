import TokenService from "../service/TokenService"

const authCheck = () => {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            throw new Error("Authorization header missing")
        }

        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) {
            throw new Error('Token missing')
        }

        const userData = TokenService.validateAccessToken(accessToken)
        if (!userData) {
            throw new Error('Token not valid')
        }

        req.user = userData
        next()
    } catch (e) {
        console.log(e)
    }
}

export default authCheck