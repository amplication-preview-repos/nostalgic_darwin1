import * as graphql from "@nestjs/graphql";
import { BankResolverBase } from "./base/bank.resolver.base";
import { Bank } from "./base/Bank";
import { BankService } from "./bank.service";

@graphql.Resolver(() => Bank)
export class BankResolver extends BankResolverBase {
  constructor(protected readonly service: BankService) {
    super(service);
  }
}
