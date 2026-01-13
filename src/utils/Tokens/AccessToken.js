import Tokens from "./Tokens";

class AcessToken extends Tokens{

    GenerateAccessToken(payload){
        return this.GenerateToken(payload, '1h',);
    }

}