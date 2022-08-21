import UserService from "../service/UserService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await UserService.registration(email, password)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await UserService.login(email, password)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await UserService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            console.log(e)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            UserService.activate(activationLink)
            return res.redirect("http://localhost:3000")
            // return res.json("Activated")
        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }
}

export default new UserController();