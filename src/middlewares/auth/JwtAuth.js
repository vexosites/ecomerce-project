import TokensService from "../../services/TokensService.js";
class AuthMiddlewares {
  constructor(TokenService, refreshTokenReposity){
    this.tokenService = TokenService
    this.refreshTokenReposity = refreshTokenReposity
  }
 async adminAuth (req, res, next) {

    const {
    "access-token": access_token,
    "refresh-token": refresh_token
    } = req.cookies;  


    const result = await this.tokenService.verify(access_token, refresh_token);

    if (!result.valid) return res.status(401).json({ error: "invalid token" });

    if (!result.idAdmin) return res.status(403).json({ error: "user don't have access" });

    if (result.access_token) {
      res.cookie("access-token", result.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
      });
    }
    if (result.refresh_token) {
      res.cookie("refresh-token", result.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    }
    return next();
}

async userAuth(req, res, next){
  const {
    "access-token": access_token,
    "refresh-token": refresh_token
  } = req.cookies;  

const result = await this.tokenService.verify(access_token, refresh_token);

if(!result.valid) return res.status(401).json({error: 'invalid token'});

if(result.access_token){
    res.cookie("access-token", result.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });
}
if(result.refresh_token){
  res.cookie("refresh-token", result.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

next()
}

}

export default new AuthMiddlewares()

