import React, { useEffect, useRef } from "react";
import TerminalText from "./TerminalText";
import type { AtmOptionProps } from "./AtmOption";
import AtmOption from "./AtmOption";
import Systems from "../assets/systems.png";

export type AtmDisplayOption = Omit<AtmOptionProps, "position">;

interface AtmDisplayProps {
    options: Omit<AtmOptionProps, "position">[];
    title: string;
    currentInput: string;
    onInputChange?: (input: string) => void;
}

const AtmDisplay: React.FC<AtmDisplayProps> = ({
    options,
    title,
    onInputChange,
    currentInput,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const distributedOptions: {
        left: AtmDisplayOption;
        right: AtmDisplayOption;
    }[] = [];

    for (let i = 0; i < 4; i++) {
        distributedOptions.push({
            right: options[i * 2] || {
                option: "",
                hide: true,
            },
            left: options[i * 2 + 1] || {
                option: "",
                hide: true,
            },
        });
    }

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onInputChange) return;
        const value = e.target.value;

        onInputChange(value);
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.value = currentInput;
    }, [currentInput]);

    return (
        <>
            <div className="bg-blue-1 border-4 border-neutral-1 pt-3 px-3 pb-1 w-full h-72 font-atm text-white flex flex-col">
                <TerminalText
                    text={title}
                    className="text-center h-12 text-lg"
                    focus={onInputChange ? false : true}
                ></TerminalText>
                <input
                    type="text"
                    ref={inputRef}
                    style={{ position: "absolute", top: "-9999px" }}
                    onChange={handleInput}
                ></input>
                <TerminalText
                    text={currentInput}
                    onClick={focusInput}
                    focus={onInputChange ? true : false}
                    className="text-left h-10"
                ></TerminalText>
                <div className="flex-1 flex flex-col-reverse text-xs">
                    {distributedOptions.map(({ left, right }, idx) => (
                        <div
                            key={idx}
                            className="flex-1 flex flex-row-reverse justify-between"
                        >
                            <div className="flex">
                                <AtmOption
                                    position="right"
                                    {...right}
                                ></AtmOption>
                            </div>
                            <div className="flex">
                                <AtmOption
                                    position="left"
                                    {...left}
                                ></AtmOption>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end mt-1">
                <img src={Systems}></img>
            </div>
        </>
    );
};

export default AtmDisplay;
