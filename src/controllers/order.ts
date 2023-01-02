import { Request, Response } from "express"
import { handlerHttp } from "../utils/error.handler"

const getItems = (req:Request, res: Response) => {
    try {
        res.send({data: 'esto solo lo ven los q tengan token jwt'})
    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEMS')
    }

}

export {
    getItems,
}
