import React, { useState, useEffect } from "react";

const TerminalText: React.FC<{ text: string; className?: string }> = ({
    text,
    className,
}) => {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={className}>
            {text}
            {showCursor && <span className="cursor">|</span>}
        </div>
    );
};

export default TerminalText;
