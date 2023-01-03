import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";

const router = Router()

router.post('/', multerMiddleware.single('myFile'), getFile)

export { router }