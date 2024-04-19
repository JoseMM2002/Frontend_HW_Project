import React from "react";
import type { AtmButtonProps } from "./AtmButton";
import AtmButton from "./AtmButton";

export interface AtmOptionProps extends AtmButtonProps {
    option: string;
    hide?: boolean;
}

const AtmOption: React.FC<AtmOptionProps> = ({
    option,
    position,
    callback,
    hide,
}) => {
    const positionClass = {
        left: "right-full",
        right: "left-full",
    }[position];
    const label = hide ? "" : option;
    const backgroundClass = hide ? "" : "bg-white";
    return (
        <>
            <div className="h-full flex flex-col justify-center relative">
                {label}
                <div
                    className={`absolute ${positionClass} ${backgroundClass} mx-1 h-1 w-2`}
                >
                    <div className="w-full h-full relative">
                        <div
                            className={`absolute ${positionClass} flex flex-col justify-start`}
                        >
                            <AtmButton {...{ position, callback }}></AtmButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AtmOption;
