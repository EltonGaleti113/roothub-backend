import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from '../prisma.service';


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private PrismaService: PrismaService) {}

    async validateUser(email:string, password: string){
        const user = await this.PrismaService.user.findUnique({where: {email}})
    }

    async login (user: {id: number, email: string}) {
        const payload = {sub: user.id, email: user.email};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
