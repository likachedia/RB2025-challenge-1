import { WinType } from "../App";

type ResultProps = {
    userChoice?: string,
    computerChoice?: string,
    winner: WinType | undefined,
}
function Result({userChoice, computerChoice, winner}: ResultProps){
    if(winner) {
        return (
            <div>
                <p>You choose: {userChoice}</p>
                <p>Computer choose: {computerChoice}</p>
                <p>{winner == WinType.DRAW ? 'Draw' : `${winner} won`} </p>
            </div>
        )
    }

    // აქ არ გინდა else.  if ბლოკში რო შევა უკვე აბრუნებს კომპონენტი მნიშვნელობას ქვედა return ზე აღარ ჩამოვა
    // უფრო კითხვადია ჯერ if(!winner) return null,  და შემდეგ return <div>...</div>

    return null;

}

export { Result };