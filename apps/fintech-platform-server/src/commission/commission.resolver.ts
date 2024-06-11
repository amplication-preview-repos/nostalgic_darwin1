import * as graphql from "@nestjs/graphql";
import { CommissionResolverBase } from "./base/commission.resolver.base";
import { Commission } from "./base/Commission";
import { CommissionService } from "./commission.service";

@graphql.Resolver(() => Commission)
export class CommissionResolver extends CommissionResolverBase {
  constructor(protected readonly service: CommissionService) {
    super(service);
  }
}
