class Jwt{
    constructor(jwtLibrary){
        this.jwtLibrary = jwtLibrary;
    }
    GenerateToken(payload, time){
        return this.jwtLibrary.sign(payload, process.env.JWT_SECRET, {expiresIn: time});
    }
}

import jwt from 'jsonwebtoken'

export default new Jwt(jwt);