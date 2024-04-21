export const AccountTypes = {
    STAR: "STAR",
    PULSE: "PULSE",
    MAESTRO: "MAESTRO",
    MASTERCARD: "MASTERCARD",
    PLUS: "PLUS",
    VISA: "VISA",
    NONE: "NONE",
} as const;

export type AccountType = (typeof AccountTypes)[keyof typeof AccountTypes];
