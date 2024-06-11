import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommissionServiceBase } from "./base/commission.service.base";

@Injectable()
export class CommissionService extends CommissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
