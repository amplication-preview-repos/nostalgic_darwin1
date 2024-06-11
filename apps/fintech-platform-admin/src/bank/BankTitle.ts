import { Bank as TBank } from "../api/bank/Bank";

export const BANK_TITLE_FIELD = "id";

export const BankTitle = (record: TBank): string => {
  return record.id?.toString() || String(record.id);
};
