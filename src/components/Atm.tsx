import AtmSign from "../assets/atm_sign.png";
import Graffiti from "../assets/graffiti.png";
import AtmDisplay from "./AtmDisplay";
import StickerGraffiti from "../assets/sticker_graf.png";
import { useEffect, useState } from "react";
import AccountTypeIndicator from "./AccountTypeIndicator";
import { AtmState, createInstance } from "../atm/index";

function Atm() {
    const [atmState, setAtmState] = useState<AtmState | null>(null);
    useEffect(() => {
        const initialize = async () => {
            const initialState = await createInstance(setAtmState);
            setAtmState(initialState);
        };
        initialize();
    }, []);

    const [inputState, setInput] = useState("");

    useEffect(() => {
        setInput(atmState?.input || "");
    }, [atmState?.input]);

    return (
        <>
            <div className="h-full flex flex-col items-center relative">
                <div className="bg-blue-2 py-4 px-20 rounded-[14px] relative">
                    <img src={AtmSign} alt="Atm Sign" />
                    <img
                        src={Graffiti}
                        alt="Graffiti"
                        className="absolute right-[28px] top-1/4"
                    />
                </div>
                <div className="flex-1 w-[90%]">
                    <div className="bg-white h-full border-t-[15px] border-neutral-2 w-full flex flex-col items-center">
                        <div className="py-2">
                            <AccountTypeIndicator accountType="VISA"></AccountTypeIndicator>
                        </div>
                        <div className="w-[70%]">
                            <AtmDisplay
                                options={atmState?.options || []}
                                title={atmState?.title || ""}
                                onInputChange={
                                    atmState?.setInput
                                        ? (input) => {
                                              if (atmState.setInput)
                                                  atmState.setInput(input);
                                              setInput(atmState.input);
                                          }
                                        : undefined
                                }
                                currentInput={inputState}
                            ></AtmDisplay>
                        </div>
                        <img
                            src={StickerGraffiti}
                            className="self-start mt-[-30px] ml-2"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Atm;
