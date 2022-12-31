import { Request, Response } from "express"
import { handlerHttp } from "../utils/error.handler"

const getItem = (req:Request, res: Response) => {
    try {

    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEM')
    }

}

const getItems = (req:Request, res: Response) => {
    try {

    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEMS')
    }

}

const updateItem = (req:Request, res: Response) => {
    try {

    } catch(e) {
        handlerHttp(res, 'ERROR_UPDATE_ITEM')
    }

}

const deleteItem = (req:Request, res: Response) => {
    try {

    } catch(e) {
        handlerHttp(res, 'ERROR_DELETE_ITEM')
    }

}

const postItem = ({body}:Request, res: Response) => {
    try {
      res.send(body)  
    } catch(e) {
        handlerHttp(res, 'ERROR_POST_ITEM')
    }

}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}
