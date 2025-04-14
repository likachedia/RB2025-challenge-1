import { useEffect, useState } from "react"
import { WinType } from "../App";

type winCountProps = {
    winner?: string;
}

function WinCount({winner}: winCountProps){
    const [userWin, setUserWin] = useState(0);
    const [computerWin, setComputerWin] = useState(0);

    useEffect(() => {
        winner == WinType.USER ? setUserWin(userWin + 1) : winner == WinType.COMPUTER ? setComputerWin(computerWin + 1) : null;
    }, [winner])
    return (
        <div>
            <p>You: {userWin}</p>
            <p>Computer: {computerWin}</p>
        </div>
    )
}

export { WinCount };