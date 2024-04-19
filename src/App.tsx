// import { useState } from "react";
// import AtmButton from "./components/AtmButton";

import Atm from "./components/Atm";

function App() {
    return (
        <>
            <div className="flex flex-col h-full items-center">
                <div className="flex-1 pt-20">
                    <Atm></Atm>
                </div>
            </div>
        </>
    );
}

export default App;
