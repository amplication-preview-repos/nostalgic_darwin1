import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankService } from "./bank.service";
import { BankControllerBase } from "./base/bank.controller.base";

@swagger.ApiTags("banks")
@common.Controller("banks")
export class BankController extends BankControllerBase {
  constructor(protected readonly service: BankService) {
    super(service);
  }
}
