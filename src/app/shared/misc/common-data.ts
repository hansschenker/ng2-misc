export const PAYMENT_METHOD_TYPE = {
    BANK: 'BANK',
    CARD: 'CARD',
};

export const LANGUAGES = [
    { key: 'EN', value: 'English' },
    { key: 'CN', value: 'Chinese' }
];

export interface User {
    name: string;
    preference: {
        language: string;
        nickName: string;
    };
    addresses: Address[];
    paymentMethods: PaymentMethod[];
}

export interface Address {
    street: string;
    postcode: string;
}

export interface PaymentMethod {
    type: string;
    cardNo: string;
    bankAccountNo: string;
}