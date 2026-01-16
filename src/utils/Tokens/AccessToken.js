import Tokens from "./Tokens.js";

class AccessToken{

    constructor(Tokens){
        this.Tokens = Tokens;
    }

    GenerateAccessToken(payload){
        return this.Tokens.GenerateToken(payload, '1h');
    }

}

export default new AccessToken(Tokens)