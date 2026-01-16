class TokensProvider{
    constructor({AccessToken, RefreshToken}){
        this.AccessToken = AccessToken;
        this.RefreshToken = RefreshToken;
    }
    async GenerateTokens(payload){
    const AccessToken = this.AccessToken.GenerateAccessToken(payload);
    const RefreshToken = await this.RefreshToken.GenerateRefreshToken(payload.id);
    return {
        AccessToken: AccessToken,
        RefreshToken: RefreshToken
    }
}
}

import AccessToken from "./AccessToken.js";
import RefreshToken from "./RefreshToken.js";

export default new TokensProvider({
    AccessToken: AccessToken,
    RefreshToken: RefreshToken
 });