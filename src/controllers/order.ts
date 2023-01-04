import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { handlerHttp } from "../utils/error.handler"

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const getItems = (req:RequestExt, res: Response) => {
    try {
        res.send({
            data: 'esto solo lo ven los q tengan token jwt',
            user: req?.user
        })
    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEMS')
    }

}

export {
    getItems,
}
