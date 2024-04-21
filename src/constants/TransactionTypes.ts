export const TransactionTypes = {
    WITHDRAWAL: "WITHDRAWAL",
    DESPOSIT: "DEPOSIT",
} as const;
export type TransactionType =
    (typeof TransactionTypes)[keyof typeof TransactionTypes];
