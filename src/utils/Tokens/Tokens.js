export class Tokens{
    constructor(TokensProvide){
        this.TokensProvide = TokensProvide;
    }
    GenerateToken(payload, time){
        return this.TokensProvide.GenerateToken(payload, time);
    }
}

import Jwt from "../Jwt.js";

export default new Tokens(Jwt);