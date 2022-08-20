import UserService from "../service/UserService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = UserService.registration(email, password)

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

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }
}

export default new UserController();