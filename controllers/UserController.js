import UserService from "../service/UserService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body
            console.log(email, password)
            const userData = await UserService.registration(email, password)
            console.log(userData)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            UserService.activate(activationLink)
        } catch (e) {
            console.log(e)
        }
        return res.json("Activated")
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }
}

export default new UserController();