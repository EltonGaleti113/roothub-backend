import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaService } from "src/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { UserService } from './user/user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "1h" },
        }), 
    ],
    providers: [PrismaService, AuthService, UserService],
    controllers: [AuthController],
})
export class AuthModule {}
