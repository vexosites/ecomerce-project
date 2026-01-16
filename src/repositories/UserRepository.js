class UserRepository{
    constructor(orm){
        this.orm = orm;
    }

    async PostUser(data){
        const result = await this.orm.PostUser(data);
        return result;
    }

    async FindByEmail(email){
        const result = await this.orm.FindByEmail(email);
        return result;
    }
}

import PrismaUsers from "./users/PrismaUsers.js";

export default new UserRepository(PrismaUsers);