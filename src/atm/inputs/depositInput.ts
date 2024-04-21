import { Dispatch, SetStateAction } from "react";
import { AtmState, atmApi } from "..";
import {
    CardAuthResponse,
    CreateTransactionRequest,
    CreateTransactionResponse,
} from "../types";
import { AtmInput } from "../atmInput";
import { AtmInfo } from "../atmInfo";
import { AtmMainMenu } from "../atmMainMenu";
import { TransactionTypes } from "../../constants/TransactionTypes";

export const depositInput = (
    hook: Dispatch<SetStateAction<AtmState | null>>,
    currentData: CardAuthResponse,
): AtmState => {
    return new AtmInput(
        hook,
        "Amount: ",
        currentData.account.type,
        async (input) => {
            try {
                const amount = parseFloat(input);
                if (Number.isNaN(amount))
                    return new AtmInfo(
                        hook,
                        "Invalid amount",
                        new AtmMainMenu(hook, currentData),
                    );
                const request: CreateTransactionRequest = {
                    amount,
                    type: TransactionTypes.DESPOSIT,
                    accountId: currentData.account.id,
                };
                const jsonRequest = JSON.stringify(request);
                const response = await atmApi.post("/transaction", jsonRequest);
                const data = response.data as CreateTransactionResponse;
                return new AtmMainMenu(hook, {
                    ...currentData,
                    account: data.account,
                });
            } catch {
                return new AtmInfo(
                    hook,
                    "Couldn't process Deposit",
                    new AtmMainMenu(hook, currentData),
                );
            }
        },
        async () => new AtmMainMenu(hook, currentData),
    );
};
