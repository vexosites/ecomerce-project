import Tokens from "./Tokens";

class RefreshToken extends Tokens{

    constructor({RefreshTokenRepository}){
        this.RefreshTokenRepository = RefreshTokenRepository;
    }

   async GenerateRefreshToken(payload){
        const token = this.GenerateToken({}, '1h',);
        await this.RefreshTokenRepository.postToken(token);
        return token;
    }
}

import RefreshTokenRepository from "../../repositories/RefreshTokenRepository";

export default new RefreshToken({RefreshTokenRepository});