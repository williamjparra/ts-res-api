import { User } from "../interface/user.interface";
import { Auth } from "../interface/auth.interface";
import userModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await userModel.findOne({email});
    if(checkIs) return 'ALREADY_USER'
    const passHash = await encrypt(password)
    const register = await userModel.create({ email, password: passHash, name })

    return register
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await userModel.findOne({ email })
    if (!checkIs) return "ERROR_INVALID";

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return "PASSWORD_INCORRECT"

    const token = await signToken(checkIs.email)
    const data = {
        user: checkIs,
        token
    }

    return data
}

export { registerNewUser, loginUser }