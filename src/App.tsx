import { useEffect, useState } from "react";
import { Element } from "./components/Element";
import { WinCount } from "./components/WinCount";
import { Result } from "./components/Result";
import { elementTypes, evalResult, WinType } from "./Utils";


function generateComputerAnswer(): elementTypes {
  const randomNum = Math.random() * 1000; 

  if(randomNum > 650){
    return elementTypes.ROCK;
  } else if(randomNum > 350){
    return elementTypes.PAPER;
  } else {
    return elementTypes.SCISSOR;
  }
}


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

  const handleUserSelect = (type: elementTypes) => {
      setUserSelection(type)
  };

  const handleReset = () => {
    setUserSelection(undefined);
    setCompSelection(undefined);
    setWinner(undefined);
    setReset(true);
  }
    return (
      <>
        <h2 className="title">Scissor paper rock</h2>
        <Element type="Rock" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Paper" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Scissor" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <WinCount winner={winner} />

        <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/>
        <button onClick={handleReset}>Try Again</button>
      </>
    );
  }
  
  export { App, WinType };