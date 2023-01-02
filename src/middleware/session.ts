import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isvalid = verifyToken(`${jwt}`)
        
        if(!isvalid) {
            res.status(401)
            res.send("NO_TIENES_TOKEN")
        } else {
            next()
        }

    } catch (e) {
        res.status(400)
        res.send('SESSION_NOT_VALID')
    }

}

export { checkJwt }