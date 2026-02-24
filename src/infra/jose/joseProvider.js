class JoseProvider {
  constructor(jwtVerify, jwtSign, errors) {
    this.jwtVerify = jwtVerify;
    this.jwtSign = jwtSign;
    this.errors = errors;
  }
  async verify(token) {
    try {
      const result = await this.jwtVerify(token, process.env.JWT_SECRET);
      return {
        ...result, // base64 decoded
        valid: true,
        expired: false
      };
    } catch (error) {
        if(error instanceof this.errors.JWTInvalid){
            throw {
                error: error.name,
                valid: false
            }
        }
        if(error instanceof this.errors.JWTExpired){
            throw {
            expired: true,
            valid: true
            }
        }
        throw error;
    }
  }
  async generate(payload, time) {
    const result = await new this.jwtSign(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(time)
      .sign(process.env.JWT_SECRET);
    return result;
  }
}

import { jwtVerify, SignJWT, errors } from "jose";

export default new JoseProvider(jwtVerify, SignJWT, errors);
