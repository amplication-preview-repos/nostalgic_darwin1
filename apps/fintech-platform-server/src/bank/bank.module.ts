import { Module } from "@nestjs/common";
import { BankModuleBase } from "./base/bank.module.base";
import { BankService } from "./bank.service";
import { BankController } from "./bank.controller";
import { BankResolver } from "./bank.resolver";

@Module({
  imports: [BankModuleBase],
  controllers: [BankController],
  providers: [BankService, BankResolver],
  exports: [BankService],
})
export class BankModule {}
