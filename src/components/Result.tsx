import { WinType } from "../App";

type ResultProps = {
    userChoice?: string,
    computerChoice?: string,
    winner: WinType | undefined,
}
function Result({userChoice, computerChoice, winner}: ResultProps){
    return (
        <div>
            <p>You choose: {userChoice}</p>
            <p>Computer choose: {computerChoice}</p>
            <p>{winner == WinType.DRAW ? 'Draw' : `${winner} won`} </p>
        </div>
    )
}

export { Result };