import { PrismaClient } from '@prisma/client'

//Conexão banco de dados
export const prisma = new PrismaClient({
    log: ['query']
})