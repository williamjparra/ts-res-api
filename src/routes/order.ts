import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const router = Router()
/**
 * esta ruta solo es accesible para los clientes con token
 */

router.get('/', checkJwt ,getItems)


export { router }