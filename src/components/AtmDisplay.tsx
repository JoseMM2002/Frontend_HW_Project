import React from "react";
import TerminalText from "./TerminalText";
import type { AtmOptionProps } from "./AtmOption";
import AtmOption from "./AtmOption";
import Systems from "../assets/systems.png";

export type AtmDisplayOption = Omit<AtmOptionProps, "position">;

interface AtmDisplayProps {
    options: Omit<AtmOptionProps, "position">[];
    title: string;
}

const AtmDisplay: React.FC<AtmDisplayProps> = ({ options, title }) => {
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
    return (
        <>
            <div className="bg-blue-1 border-4 border-neutral-1 pt-3 px-3 pb-1 w-full h-60 font-atm text-white text-xl flex flex-col">
                <TerminalText
                    text={title}
                    className="text-center"
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
