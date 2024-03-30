import prisma from "../config/DB.js"

class Query {
    constructor(table, where) {
        this.table = table
        this.where = where
    }

    async find(table, query) {
        // let q = {}
        const data = await prisma[table].findMany(query)

        return data
    }

    async findById(table, where) {
        const data = await prisma[table].findFirst({
            where: where
        })

        return data
    }
}


export default Query