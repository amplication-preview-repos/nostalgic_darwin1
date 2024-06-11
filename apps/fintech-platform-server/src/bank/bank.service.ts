import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankServiceBase } from "./base/bank.service.base";

@Injectable()
export class BankService extends BankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
