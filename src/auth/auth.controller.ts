import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login(@Body() body: {email: string, password: string}){
        console.log(body.email)
        let user = await this.authService.validateUser(body.email, body.password);
        console.log(user);
        if(!user) throw new UnauthorizedException("Invalid Credentials");
        return this.authService.login(user);
    }
}
