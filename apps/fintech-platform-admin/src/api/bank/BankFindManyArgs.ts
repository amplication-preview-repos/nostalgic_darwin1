import { BankWhereInput } from "./BankWhereInput";
import { BankOrderByInput } from "./BankOrderByInput";

export type BankFindManyArgs = {
  where?: BankWhereInput;
  orderBy?: Array<BankOrderByInput>;
  skip?: number;
  take?: number;
};
