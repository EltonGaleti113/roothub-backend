import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class UserService {
    constructor(private PrismaService: PrismaService) {}

    async findByEmail(email: string) {
        const user = await this.PrismaService.user.findUnique({ where: { email } });

        return user;
    }
}
