class UserRepository{
    constructor(orm){
        this.orm = orm;
    }

    async create(data){
        const result = await this.orm.create(data);
        return result;
    }

    async FindByEmail(email){
        const result = await this.orm.FindByEmail(email);
        return result;
    }
}

import PrismaUsers from "../../infra/Prisma/PrismaUsers.js";

export default new UserRepository(PrismaUsers);