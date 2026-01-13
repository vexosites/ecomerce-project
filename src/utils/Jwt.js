class Jwt{
    constructor(jwtLibrary){
        this.jwtLibrary = jwtLibrary;
    }
    GenerateToken(payload, time){
        this.jwtLibrary.sign(payload, process.env.jwt_secret, {expiresIn: time});
    }
}

import jwt from 'jsonwebtoken'

export default new Jwt(jwt);