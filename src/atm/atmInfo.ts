import { Dispatch, SetStateAction } from "react";
import { AccountType, AccountTypes } from "../constants/AccountTypes";
import { AtmOption, AtmState } from "./index";

export class AtmInfo implements AtmState {
    title: string;
    options: AtmOption[];
    accountType: AccountType;
    hook: Dispatch<SetStateAction<AtmState | null>>;
    input = "";
    constructor(
        hook: Dispatch<SetStateAction<AtmState | null>>,
        info: string,
        stateReturn?: AtmState,
    ) {
        this.hook = hook;
        this.title = info;
        if (stateReturn)
            this.options = [
                {
                    option: "Return",
                    callback: async () => {
                        this.hook(stateReturn);
                    },
                },
            ];
        else this.options = [];
        this.accountType = AccountTypes.NONE;
    }
}
