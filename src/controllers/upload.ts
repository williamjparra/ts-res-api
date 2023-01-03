import { Request, Response } from "express"
import { RequestExt } from "../interface/req-ext"
import { Storage } from "../interface/storage"
import { registerUpload } from "../services/storage"
import { handlerHttp } from "../utils/error.handler"

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req
        const dataToRegister: Storage = {
            fileName: `${file?.filename}.filename`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (e) {
        handlerHttp(res, "error_get_blog")
    }
}

export { getFile }