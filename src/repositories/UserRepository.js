class UserRepository{
    constructor(orm){
        this.orm = orm;
    }

    async PostUser(data){
        const result = await this.orm.PostUser(data);
        return result;
    }
}

import PrismaUsers from "../../prisma/users/PrismaUsers";

export default new UserRepository(PrismaUsers);