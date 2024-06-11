import { Module } from "@nestjs/common";
import { CommissionModuleBase } from "./base/commission.module.base";
import { CommissionService } from "./commission.service";
import { CommissionController } from "./commission.controller";
import { CommissionResolver } from "./commission.resolver";

@Module({
  imports: [CommissionModuleBase],
  controllers: [CommissionController],
  providers: [CommissionService, CommissionResolver],
  exports: [CommissionService],
})
export class CommissionModule {}
