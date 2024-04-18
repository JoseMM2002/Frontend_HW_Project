import type { CardType } from "src/constants/CardTypes";

const CardTypeIndicator: React.FC<{ cardType: CardType }> = ({ cardType }) => {
    const positioning: Record<CardType, string> = {
        NONE: "w-0",
        STAR: "w-[29px] right-0 credit-card-positioning star-positioning",
        PULSE: "w-[45px] left-[38px] credit-card-positioning pulse-positioning",
        MAESTRO:
            "w-[35px] left-[90px] credit-card-positioning maestro-positioning",
        MASTERCARD:
            "w-[32px] right-[80px] credit-card-positioning mastercard-positioning",
        PLUS: "w-[29px] right-[35px] credit-card-positioning plus-positioning",
        VISA: "w-[29px] right-0 credit-card-positioning visa-positioning",
    };
    const cardPositioning = positioning[cardType];
    return (
        <>
            <div className="bg-credit-types w-[238px] h-[22px] bg-bottom relative">
                <div
                    className={`absolute bg-credit-types top-0 bottom-0 ${cardPositioning}`}
                ></div>
            </div>
        </>
    );
};
export default CardTypeIndicator;
