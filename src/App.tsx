import { useEffect } from "react";
import { Element } from "./components/Element";
import { WinCount } from "./components/WinCount";
import { Result } from "./components/Result";
import { elementTypes, WinType } from "./lib/types/types";
import { evalResult, generateComputerAnswer } from "./lib/helpers/utils";
import { elemnts } from "./lib/config/config";
import { useGameState } from "./useGameState";

function App() {
  const {winner, setWinner, userSelection, setUserSelection, compSelection, setCompSelection, reset, setReset}= useGameState();

  useEffect(() => {
    userSelection != undefined ? setCompSelection(generateComputerAnswer()) : null;
  }, [userSelection]);

  useEffect(() => {
    setReset(false);
    if(compSelection){
      const win = evalResult(userSelection!, compSelection!);
      setWinner(win!);
    }

  }, [compSelection]);

  function handleUserSelect(type: elementTypes){
      setUserSelection(type)
  };

  function handleReset() {
    setUserSelection(undefined);
    setCompSelection(undefined);
    setWinner(undefined);
    setReset(true);
  }

    return (
      <>
        <h2 className="title">Scissor paper rock</h2>
        {elemnts.map(element => {
          return <Element key={element.id} type={element.type} userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        })}
        <WinCount winner={winner} />
        {winner ? <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/> : null}       
        <button onClick={handleReset}>Try Again</button>
      </>
    );
  }
  
  export { App, WinType };