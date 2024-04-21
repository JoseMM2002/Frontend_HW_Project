import { Dispatch, SetStateAction } from "react";
import { AtmState, atmApi } from "..";
import { CardAuthRequest, CardAuthResponse } from "../types";
import { AtmMainMenu } from "../atmMainMenu";
import { AtmGreetings } from "../atmGreetings";
import { AccountTypes } from "../../constants/AccountTypes";
import { AtmInput } from "../atmInput";
import { AtmInfo } from "../atmInfo";

export const inputPin = async (
    hook: Dispatch<SetStateAction<AtmState | null>>,
    cardNumber: string,
    pin: string,
) => {
    try {
        const number = parseInt(pin);
        if (Number.isNaN(number) || pin.length !== 4)
            return new AtmInfo(hook, "PIN is invalid", new AtmGreetings(hook));

        const request: CardAuthRequest = {
            cardNumber,
            pin,
        };
        const jsonRequest = JSON.stringify(request);
        const response = await atmApi.post("/card/auth", jsonRequest);
        const data = response.data as CardAuthResponse;
        return new AtmMainMenu(hook, data);
    } catch (e: unknown) {
        return new AtmInfo(hook, "Card not found", new AtmGreetings(hook));
    }
};

export const inputCard = (
    hook: Dispatch<SetStateAction<AtmState | null>>,
): AtmState => {
    return new AtmInput(
        hook,
        "Enter Card Number: ",
        AccountTypes.NONE,
        async (cardNumber: string) => {
            const number = parseInt(cardNumber);
            if (Number.isNaN(number) || cardNumber.length !== 16)
                return new AtmInfo(
                    hook,
                    "Card Number is invalid",
                    new AtmGreetings(hook),
                );
            return new AtmInput(
                hook,
                "Enter PIN: ",
                AccountTypes.NONE,
                async (pin: string) => {
                    return inputPin(hook, cardNumber, pin);
                },
                async () => new AtmGreetings(hook),
            );
        },
        async () => new AtmGreetings(hook),
    );
};
