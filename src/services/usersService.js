import AppError from "../errors/UserError.js";

class UserService{
constructor(userRepository, tokensProvider){
this.UserRepository = userRepository;
this.TokensProvider = tokensProvider;
}
async post(validator){
try {
    await this.UserRepository.PostUser({
        name: validator.name,
        email: validator.email,
        password: validator.password,
        cpf: validator.cpf
    })


    const user = await this.UserRepository.FindByEmail(validator.email);

    const payload = {
        id: user.id, 
        name: user.name,
        email: user.email
    }

    const Tokens = await this.TokensProvider.GenerateTokens(payload);

    const result = {
        status: 201,
        user,
        Tokens: {
            AccessToken: Tokens.AccessToken,
            RefreshToken: Tokens.RefreshToken
        }
    }

    return result
} catch (error) {
    if(error.code == 'P2002') {
        throw new AppError("user already exists", 403)
    }
    throw new error;
}
};

async get(validator){
    try {
        const user = await this.UserRepository.FindByEmail(validator.email);
        if(!user) { 
            throw new AppError("user not found", 404);
        }
        if(user.password !== validator.password) { 
            throw new AppError("user not found", 404);
        }

        const payload = {
            id: user.id, 
            name: user.name,
            email: user.email
        }
    
        const Tokens = await this.TokensProvider.GenerateTokens(payload);
    
        const result = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            Tokens: {
                AccessToken: Tokens.AccessToken,
                RefreshToken: Tokens.RefreshToken
            }
        }
    
        return result
    } catch (error) {
        throw error;
    }
}
}

import PrismaUsers from "../repositories/users/PrismaUsers.js";
import TokensProvider from "../utils/Tokens/TokensProvider.js";

export default new UserService(
PrismaUsers,
TokensProvider
);