import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user && password == user.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: { id: number; email: string }) {
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
