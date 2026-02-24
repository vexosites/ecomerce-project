class TokensService {
  constructor(TokensProvide, TokensRepository) {
    this.TokensProvider = TokensProvide;
    this.TokensRepository = TokensRepository;
  }
  async GenerateNewAcessToken() {}

  async adminVerify(access_token, refresh_token) {
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

import Jwt from "../Jwt.js";

export default new TokensService(Jwt);
