import {Router} from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}` 
const router = Router()

const cleanFileName = (filename:string) => {
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if(cleanName !== 'index') {
        console.log(`loading route ......... /${cleanName}`)
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }    
})

export {router}