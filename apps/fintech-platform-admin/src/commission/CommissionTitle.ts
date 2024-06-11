import { Commission as TCommission } from "../api/commission/Commission";

export const COMMISSION_TITLE_FIELD = "id";

export const CommissionTitle = (record: TCommission): string => {
  return record.id?.toString() || String(record.id);
};
