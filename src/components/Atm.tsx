import AtmSign from "../assets/atm_sign.png";
import Graffiti from "../assets/graffiti.png";
import type { AtmDisplayOption } from "./AtmDisplay";
import AtmDisplay from "./AtmDisplay";
import CardTypeIndicator from "./CardTypeIndicator";
import StickerGraffiti from "../assets/sticker_graf.png";

function Atm() {
    const options: AtmDisplayOption[] = [
        {
            option: "Enter PIN",
            callback: async () => {
                console.log("this is a callback");
            },
        },
        {
            option: "Withdraw",
            callback: async () => {
                console.log("this is a callback");
            },
        },
        {
            option: "Balance",
            callback: async () => {
                console.log("this is a callback");
            },
        },
    ];
    return (
        <>
            <div className="h-full flex flex-col items-center relative">
                <div className="bg-blue-2 py-4 px-16 rounded-[14px] relative">
                    <img src={AtmSign} alt="Atm Sign" />
                    <img
                        src={Graffiti}
                        alt="Graffiti"
                        className="absolute right-[28px] top-1/4"
                    />
                </div>
                <div className="flex-1 w-[85%]">
                    <div className="bg-white h-full border-t-[15px] border-neutral-2 w-full flex flex-col items-center">
                        <div className="py-2">
                            <CardTypeIndicator cardType="VISA"></CardTypeIndicator>
                        </div>
                        <div className="w-[65%]">
                            <AtmDisplay
                                options={options}
                                title="Welcome to the ATM"
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
