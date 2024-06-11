import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommissionService } from "./commission.service";
import { CommissionControllerBase } from "./base/commission.controller.base";

@swagger.ApiTags("commissions")
@common.Controller("commissions")
export class CommissionController extends CommissionControllerBase {
  constructor(protected readonly service: CommissionService) {
    super(service);
  }
}
