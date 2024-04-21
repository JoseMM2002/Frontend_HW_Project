import React, { useState, useEffect } from "react";

const TerminalText: React.FC<{
    text: string;
    focus: boolean;
    className?: string;
    onClick?: () => void;
}> = ({ text, focus, ...props }) => {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (focus) {
            const timer = setInterval(() => {
                setShowCursor((prevShowCursor) => !prevShowCursor);
            }, 500);

            return () => clearInterval(timer);
        } else {
            setShowCursor(false);
        }
    }, [focus]);

    const lines = text.split("\n");

    return (
        <div {...props}>
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line} {}
                    {index < lines.length - 1 && <br />}
                </React.Fragment>
            ))}
            {showCursor && <span className="cursor">|</span>}
        </div>
    );
};

export default TerminalText;
