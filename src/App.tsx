import { useEffect, useState } from "react";
import { Element } from "./components/Element";
import { WinCount } from "./components/WinCount";
import { Result } from "./components/Result";
import { elementTypes, WinType } from "./lib/types/types";
import { evalResult, generateComputerAnswer } from "./lib/helpers/utils";
import { elemnts } from "./lib/config/config";

function App() {
  const [winner, setWinner] = useState<WinType | undefined>();
  const [userSelection, setUserSelection] = useState<elementTypes | undefined>();
  const [compSelection, setCompSelection] = useState<elementTypes | undefined>();
  const [reset, setReset] = useState<boolean>(false);


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
          return <Element type={element.type} userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        })}
        {/* <Element type="Rock" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Paper" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Scissor" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/> */}
        <WinCount winner={winner} />
        {winner ? <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/> : null}       
        <button onClick={handleReset}>Try Again</button>
      </>
    );
  }
  
  export { App, WinType };