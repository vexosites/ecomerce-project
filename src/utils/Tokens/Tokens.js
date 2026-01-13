class Tokens{
    constructor(TokensProvide){
        this.TokensProvide = TokensProvide;
    }
    GenerateToken(payload, time){
        return this.TokensProvide.GenerateToken(payload, time);
    }
}

import Jwt from "../Jwt";

export default new Tokens(Jwt);