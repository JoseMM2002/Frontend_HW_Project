import { Dispatch, SetStateAction } from "react";
import { AccountType } from "../constants/AccountTypes";
import { AtmOption, AtmState } from ".";
import { CardAuthResponse } from "./types";

import { depositInput } from "./inputs/depositInput";
import { withdrawInput } from "./inputs/widthrawaInput";
import { balanceInput } from "./inputs/balanceInput";
import { exitInput } from "./inputs/exitInput";

export class AtmMainMenu implements AtmState {
    title: string;
    options: AtmOption[];
    accountType: AccountType;
    hook: Dispatch<SetStateAction<AtmState | null>>;
    input = "";
    currentData: CardAuthResponse;
    constructor(
        hook: Dispatch<SetStateAction<AtmState | null>>,
        currentData: CardAuthResponse,
    ) {
        this.hook = hook;
        this.title = `Hi ${currentData.user.name}! Please make a choice...`;
        this.accountType = currentData.account.type;
        this.options = [
            {
                option: "Deposit",
                callback: async () => {
                    hook(depositInput(hook, currentData));
                },
            },
            {
                option: "Withdraw",
                callback: async () => {
                    hook(withdrawInput(hook, currentData));
                },
            },
            {
                option: "Balance",
                callback: async () => {
                    hook(await balanceInput(hook, currentData));
                },
            },
            {
                option: "Exit",
                callback: async () => {
                    hook(exitInput(hook));
                },
            },
        ];
        this.currentData = currentData;
    }
}
