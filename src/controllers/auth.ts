import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"
import { handlerHttp } from "../utils/error.handler"

const registerController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(body)
        res.send(responseUser)
    } catch (e) {
        handlerHttp(res, 'ERROR_ON_REGISTER', e)
    }
}

const loginController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await loginUser(body)
        if(responseUser === "PASSWORD_INCORRECT") {
            res.status(403)
        }
        res.send(responseUser)
    } catch (e) {
        handlerHttp(res, 'ERROR_ON_LOGIN', e)
    }
}

export {registerController, loginController}