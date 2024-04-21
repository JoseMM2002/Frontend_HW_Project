import { AccountType } from "src/constants/AccountTypes";
import { TransactionType } from "src/constants/TransactionTypes";

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Transaction {
    id: string;
    amount: number;
    type: TransactionType;
}

export interface Card {
    id: string;
    cardNumber: string;
    accountId: string;
}

export interface Account {
    id: string;
    funds: number;
    userId: string;
    accountNumber: string;
    type: AccountType;
}

export interface CardAuthResponse {
    account: Account;
    user: User;
    card: Card;
}

export interface CardAuthRequest {
    cardNumber: string;
    pin: string;
}

export interface CreateTransactionRequest {
    amount: number;
    accountId: string;
    type: TransactionType;
}

export interface CreateTransactionResponse {
    transaction: Transaction;
    account: Account;
}

export interface BalanceResposnse {
    currentFunds: number;
    totalWithdrawals: number;
    totalDeposits: number;
}
