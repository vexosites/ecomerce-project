class TokensService {
  constructor(TokensProvide, TokensRepository) {
    this.TokensProvider = TokensProvide;
    this.TokensRepository = TokensRepository;
  }
  async generate(payload) {
    try {
      const access_token = await this.TokensProvider.generate(payload, '30m');
      const refresh_token = await this.TokensProvider.generate({userId: payload.id}, '15d');
      console.log('refresh-tokend', refresh_token)
      console.log('access-tokken', access_token)
      const result = await this.TokensRepository.create({
        userId: payload.id,
        token: refresh_token
      })
      console.log('result', result);
      return {
        access_token,
        refresh_token
      }
    } catch (error) {
      throw error
    }
  }

  async verify(access_token, refresh_token) {
    try {
      const token = await this.TokensProvider.verify(access_token);

      if (!token.isAdmin) throw { valid: false };

      if (this.TokensProvider.isOlder9Min(token.decoded.payload.iat)) {
        return {
          access_token: await this.TokensProvider.generate(token, "30min"),
          valid: true,
        };
      }

      return { access_token, valid: true };
    } catch (error) {
      if (error.valid && error.expired) {
        try {
          const refreshPayload = await this.TokensProvider.verify(refresh_token)
            .decoded.payload;

          const storedRefresh = await this.TokensRepository.get(
            refreshPayload.userId
          );
          if (!storedRefresh) throw new Error("Refresh token not found");
          const refreshToken = await this.TokensProvider.generate(
            refreshPayload,
            "15d"
          );
          return {
            valid: true,
            refreshToken, 
          };
        } catch {
          throw { error: new Error("invalid Refresh token"), valid: false };
        }
      }
      throw error;
    }
  }
}

import TokensProvider from "../utils/Tokens/TokensProvider.js";
import refreshTokensRepository from "../repositories/refresh-tokens-repository.js";
export default new TokensService(TokensProvider, refreshTokensRepository);
