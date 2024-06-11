import { CommissionWhereInput } from "./CommissionWhereInput";
import { CommissionOrderByInput } from "./CommissionOrderByInput";

export type CommissionFindManyArgs = {
  where?: CommissionWhereInput;
  orderBy?: Array<CommissionOrderByInput>;
  skip?: number;
  take?: number;
};
