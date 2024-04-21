import { Dispatch, SetStateAction } from "react";
import { AtmState, atmApi } from "..";
import { AtmMainMenu } from "../atmMainMenu";
import { BalanceResposnse, CardAuthResponse } from "../types";
import { AtmInfo } from "../atmInfo";

export const balanceInput = async (
    hook: Dispatch<SetStateAction<AtmState | null>>,
    currentData: CardAuthResponse,
): Promise<AtmState> => {
    try {
        const response = await atmApi.get(
            `/account/balance/${currentData.account.id}`,
            {
                params: {
                    accountId: currentData.account.id,
                },
            },
        );
        const data = response.data as BalanceResposnse;
        return new AtmInfo(
            hook,
            `Current Funds: ${data.currentFunds}\n Total Withdrawals: ${data.totalWithdrawals}\n Total Deposits ${data.totalDeposits}`,
            new AtmMainMenu(hook, currentData),
        );
    } catch {
        return new AtmInfo(
            hook,
            "Couldn't proces Balance request",
            new AtmMainMenu(hook, currentData),
        );
    }
};
