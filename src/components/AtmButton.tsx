import type React from "react";

interface AtmButtonProps {
    position: "left" | "right";
    callback: () => Promise<void>;
}

const AtmButton: React.FC<AtmButtonProps> = ({ position }) => {
    const positionClass = {
        left: "left-full",
        right: "right-full",
    }[position];

    return (
        <>
            <div className="px-5">
                <button className="px-10 py-6 bg-neutral-3 rounded-lg relative">
                    <div className="absolute bg-neutral-1 top-[-6px] px-10 py-6 left-0 rounded-lg"></div>
                    <div className="absolute bg-neutral-2 top-0 px-10 py-[21px] left-0 rounded-lg"></div>
                    <div
                        className={`absolute bg-neutral-3 px-5 py-1 ${positionClass} top-1/3`}
                    ></div>
                </button>
            </div>
        </>
    );
};

export default AtmButton;
