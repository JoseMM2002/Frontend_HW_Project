import { AccountType } from "../constants/AccountTypes";
import { AtmOption, AtmState } from ".";
import { Dispatch, SetStateAction } from "react";

export class AtmInput implements AtmState {
    title: string;
    options: AtmOption[];
    accountType: AccountType;
    input: string;
    hook: Dispatch<SetStateAction<AtmState | null>>;
    constructor(
        hook: Dispatch<SetStateAction<AtmState | null>>,
        title: string,
        accountType: AccountType,
        onSubmit: (input: string) => Promise<AtmState>,
        onCancel: () => Promise<AtmState>,
    ) {
        this.hook = hook;
        this.title = title;
        this.options = [
            {
                option: "Submit",
                callback: async () => {
                    hook(await onSubmit(this.input));
                },
            },
            {
                option: "Cancel",
                callback: async () => {
                    this.setInput("");
                    hook(await onCancel());
                },
            },
        ];
        this.accountType = accountType;
        this.input = "";
    }
    setInput(str: string): void {
        this.input = str;
    }
}
