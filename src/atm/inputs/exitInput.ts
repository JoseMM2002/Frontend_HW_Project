import { Dispatch, SetStateAction } from "react";
import { AtmState } from "..";
import { AtmGreetings } from "../atmGreetings";

export const exitInput = (
    hook: Dispatch<SetStateAction<AtmState | null>>,
): AtmState => {
    return new AtmGreetings(hook);
};
