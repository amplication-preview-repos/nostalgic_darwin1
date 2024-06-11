import { Loan as TLoan } from "../api/loan/Loan";

export const LOAN_TITLE_FIELD = "id";

export const LoanTitle = (record: TLoan): string => {
  return record.id?.toString() || String(record.id);
};
