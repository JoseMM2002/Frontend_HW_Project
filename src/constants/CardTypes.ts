export const CardTypes = {
    'STAR': 'STAR',
    'PULSE': 'PULSE',
    'MAESTRO': 'MAESTRO',
    "MASTERCARD": "MASTERCARD",
    "PLUS": "PLUS",
    "VISA": "VISA", 
    "NONE": "NONE"
} as const;

export type CardType = (typeof CardTypes)[keyof typeof CardTypes]