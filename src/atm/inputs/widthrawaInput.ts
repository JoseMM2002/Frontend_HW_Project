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

export const withdrawInput = (
    hook: Dispatch<SetStateAction<AtmState | null>>,
    currentData: CardAuthResponse,
): AtmState => {
    return new AtmInput(
        hook,
        `Amount (max: ${currentData.account.funds})`,
        currentData.account.type,
        async (input) => {
            try {
                const amount = parseFloat(input);
                if (Number.isNaN(amount) || amount > currentData.account.funds)
                    return new AtmInfo(
                        hook,
                        "Invalid amount",
                        new AtmMainMenu(hook, currentData),
                    );
                const request: CreateTransactionRequest = {
                    amount,
                    type: TransactionTypes.WITHDRAWAL,
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
                    "Couldn't process Withdraw",
                    new AtmMainMenu(hook, currentData),
                );
            }
        },
        async () => new AtmMainMenu(hook, currentData),
    );
};
