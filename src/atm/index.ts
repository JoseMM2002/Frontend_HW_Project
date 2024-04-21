import axios from "axios";
import { AccountType, AccountTypes } from "../constants/AccountTypes";
import { AtmGreetings } from "./atmGreetings";
import { AtmInfo } from "./atmInfo";
import React from "react";
import { CardAuthResponse } from "./types";

export interface AtmOption {
    option: string;
    callback: (input?: string) => Promise<void>;
}

export interface AtmState {
    title: string;
    options: AtmOption[];
    accountType: AccountType;
    hook: React.Dispatch<React.SetStateAction<AtmState | null>>;
    input: string;
    currentData?: CardAuthResponse;
    setInput?(str: string): void;
}

export const atmApi = axios.create({
    baseURL: "https://backend.hw.project:8000/api",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const createInstance = async (
    hook: React.Dispatch<React.SetStateAction<AtmState | null>>,
): Promise<AtmState> => {
    try {
        await atmApi.get("");
        return new AtmGreetings(hook);
    } catch (_) {
        return new AtmInfo(hook, "No system available");
    }
};

export const voidState = async (
    hook: React.Dispatch<React.SetStateAction<AtmState | null>>,
): Promise<AtmState> => {
    return {
        title: "",
        options: [],
        accountType: AccountTypes.NONE,
        input: "",
        hook,
    };
};
