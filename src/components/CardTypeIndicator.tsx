import type { CardType } from "src/constants/CardTypes";

const CardTypeIndicator: React.FC<{ cardType: CardType }> = ({ cardType }) => {
    const positioning: Record<CardType, string> = {
        NONE: "w-0",
        STAR: "w-[29px] left-0 star-positioning",
        PULSE: "w-[45px] left-[38px] pulse-positioning",
        MAESTRO: "w-[35px] left-[90px] maestro-positioning",
        MASTERCARD: "w-[32px] right-[80px] mastercard-positioning",
        PLUS: "w-[29px] right-[35px] plus-positioning",
        VISA: "w-[29px] right-0 visa-positioning",
    };
    const cardPositioning = positioning[cardType];
    return (
        <>
            <div className="bg-credit-types w-[238px] h-[22px] bg-bottom relative">
                <div
                    className={`absolute bg-credit-types bottom-0 h-[19px] ${cardPositioning}`}
                ></div>
            </div>
        </>
    );
};
export default CardTypeIndicator;
