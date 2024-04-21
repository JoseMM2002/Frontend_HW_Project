import { AccountType, AccountTypes } from "../constants/AccountTypes";
import { AtmOption, AtmState } from "./index";
import { Dispatch, SetStateAction } from "react";
import { inputCard } from "./inputs/cardInput";

export class AtmGreetings implements AtmState {
    title: string;
    options: AtmOption[];
    accountType: AccountType;
    hook: Dispatch<SetStateAction<AtmState | null>>;
    input = "";
    constructor(hook: Dispatch<SetStateAction<AtmState | null>>) {
        this.hook = hook;
        this.title = "Welcome to the ATM";
        this.options = [
            {
                option: "Enter Card Number",
                callback: async () => {
                    hook(inputCard(hook));
                },
            },
        ];
        this.accountType = AccountTypes.NONE;
    }
}
