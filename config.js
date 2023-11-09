import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const MONGODB = process.env.MONGODB
const BASE = process.env.BASE

export default {
    PORT,
    MODO_PERSISTENCIA,
    MONGODB,
    BASE
}