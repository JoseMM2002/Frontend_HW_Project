import type React from "react";

export interface AtmButtonProps {
    position: "left" | "right";
    callback?: () => Promise<void>;
}

const AtmButton: React.FC<AtmButtonProps> = ({ position, callback }) => {
    const positionClass = {
        left: "right-full",
        right: "left-full",
    }[position];

    return (
        <>
            <button
                className="mx-1 w-3 h-1 bg-neutral-3 relative"
                onClick={() => {
                    if (callback) callback();
                }}
            >
                <div className={`${positionClass} absolute h-5 w-8 top-[-8px]`}>
                    <div className="w-full h-full relative">
                        <div className="absolute bg-neutral-1 rounded-sm top-[-2px] h-5 w-8"></div>
                        <div className="absolute bg-neutral-3 rounded-sm top-[2px] h-5 w-8"></div>
                        <div className="absolute bg-neutral-2 rounded-sm top-0 h-5 w-8"></div>
                    </div>
                </div>
            </button>
        </>
    );
};

export default AtmButton;
