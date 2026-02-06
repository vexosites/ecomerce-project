class Redis_om_refresh_tokens {
  constructor(refreshTokensRepository) {
    this.refreshTokensRepository = refreshTokensRepository;
  }
}

import refreshTokensRepository from "./models/refresh-tokens-model.js";

export default new Redis_om_refresh_tokens(refreshTokensRepository);
