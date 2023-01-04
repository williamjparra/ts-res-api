import { Car } from '../interface/car.interface'
import itemModel from '../models/item'

const insertCar = async (item: Car) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert
}

const getCars = async () => {
    const responseItem = await itemModel.find({})
    return responseItem
}

const getCar = async (_id: string) => {
    const responseItem = await itemModel.findById(_id)
    return responseItem
}

const updateCar = async (_id: string, data: Car) => {
    const responseItem = await itemModel.findOneAndUpdate(
        {_id},
        data,
        {new: true}
    );
    return responseItem
}

const deleteCar = async (_id: string) => {
    const responseItem = await itemModel.findOneAndDelete({_id})
    return responseItem
}

export {insertCar, getCars, getCar, updateCar, deleteCar}