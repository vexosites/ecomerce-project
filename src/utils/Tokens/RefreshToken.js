class RefreshToken{

    constructor({RefreshTokenRepository, Tokens}){
        this.RefreshTokenRepository = RefreshTokenRepository;
        this.Tokens = Tokens;
    }

   async GenerateRefreshToken(userId){
    let token;
    try{
        token = this.Tokens.GenerateToken({}, '7d');
        await this.RefreshTokenRepository.PostRefreshToken({
            token,
            userId: userId
        });
        return token;
        } catch(error) {
            if(error.code === 'P2002') {
                await this.RefreshTokenRepository.DeleteRefreshToken(userId);
                await this.RefreshTokenRepository.PostRefreshToken({
                    token,
                    userId
                })
                return token
            }
            throw error;
        }
    }
}

import RefreshTokenRepository from "../../repositories/RefreshTokenRepository.js";
import Tokens from "./Tokens.js";

export default new RefreshToken({RefreshTokenRepository, Tokens});