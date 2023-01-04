import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"
import { handlerHttp } from "../utils/error.handler"

const getItem = async ({ params }:Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCar(id)
        const data = response ? response : 'NOT_FOUND'
        res.send(data)
    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEM')
    }

}

const getItems = async (req:Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch(e) {
        handlerHttp(res, 'ERROR_GET_ITEMS', e)
    }

}

const updateItem = async (req:Request, res: Response) => {
    try {
        const response = await updateCar(req.params.id, req.body)
        res.send(response)
    } catch(e) {
        handlerHttp(res, 'ERROR_UPDATE_ITEM')
    }

}

const deleteItem = async (req:Request, res: Response) => {
    try {
        const response = await deleteCar(req.params.id)
        res.send(response)
    } catch(e) {
        handlerHttp(res, 'ERROR_DELETE_ITEM')
    }

}

const postItem = async ({body}:Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)  
    } catch(e) {
        handlerHttp(res, 'ERROR_POST_ITEM', e)
    }

}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}