class TokensProvider {
  constructor(jwtProvider) {
    this.jwtProvider = jwtProvider
  }
  async GenerateTokens(payload) {
    const AccessToken = this.AccessToken.GenerateAccessToken(payload);
    const RefreshToken = await this.RefreshToken.GenerateRefreshToken(
      payload.id
    );
    return {
      AccessToken: AccessToken,
      RefreshToken: RefreshToken,
    };
  }
  async verify(token){
    try {
       const decoded = await this.jwtProvider.verify(token);
    if(decoded.payload.rule !== 'admin'){
      return {
        ...decoded,
        isAdmin: false
      }
    }
    return {
      ...decoded,
      isAdmin: true
    };
    } catch (error) {
      if(!error.valid){
        throw {
          valid: false
        }

      if(error.expired){
         throw await {
          payload: this.jwtProvider.decode(error.token),
          expired: true,
          valid: true
        }
      }
      throw error
    }
  }
}

  isOlder9Min(iat) {
    const now = Math.floor(Date.now() / 1000);
    const nineMin = 60 * 9;
    if((now - iat) >= nineMin){
        return true;
    }
    return false;
  }
}

import joseProvider from "../../infra/jose/joseProvider.js";

export default new TokensProvider(joseProvider);
