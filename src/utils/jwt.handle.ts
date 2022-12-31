import { sign, verify } from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'tokensecret'

const signToken = async (id: string) => {
    const jwt = await sign({id}, JWT_SECRET, {expiresIn: '2h'})
    return jwt
}

const verifyToken = async () => {}

export { signToken, verifyToken }