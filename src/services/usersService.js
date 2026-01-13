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

    const user = await this.userRepository.FindByEmail(validator.email);

    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    const Tokens = await this.TokensProvider.GenerateTokens(payload);

    const result = {
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
}
};
}

import PrismaUsers from "../../prisma/users/PrismaUsers.js";
import TokensProvider from "../utils/Tokens/TokensProvider.js";

export default new UserService(
PrismaUsers,
TokensProvider
);