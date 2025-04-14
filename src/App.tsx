import { useEffect, useState } from "react";
import { Element } from "./components/Element";
import { WinCount } from "./components/Winner";
import { Result } from "./components/Result";

enum elementTypes {
  ROCK = 'Rock',
  PAPER = 'Paper',
  SCISSOR = 'Scissor',
}

export enum WinType {
  USER = 'User',
  COMPUTER = 'Computer',
  DRAW = 'Draw'
}

function evalResult(userChoice: elementTypes, computerChoice: elementTypes){
  if(userChoice == computerChoice) return WinType.DRAW;

  if(userChoice == elementTypes.SCISSOR) {
     switch(computerChoice){
      case elementTypes.PAPER: return WinType.USER;
      case elementTypes.ROCK: return WinType.COMPUTER;
    }
  }

  if(userChoice == elementTypes.ROCK) {
    switch(computerChoice){
     case elementTypes.SCISSOR: return WinType.USER;
     case elementTypes.PAPER: return WinType.COMPUTER;
   }
 }

 if(userChoice == elementTypes.PAPER) {
  switch(computerChoice){
   case elementTypes.ROCK: return WinType.USER;
   case elementTypes.SCISSOR: return WinType.COMPUTER;
 }
}
}

function App() {
  const [winner, setWinner] = useState<WinType | undefined>();
  const [userSelection, setUserSelection] = useState<elementTypes | undefined>();
  const [compSelection, setCompSelection] = useState<elementTypes | undefined>();
  const [background, setBackground] = useState<string>('')
 

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

  useEffect(() => {
    console.log('efect 1', userSelection)
    userSelection != undefined ? setCompSelection(generateComputerAnswer()) : null;
  }, [userSelection]);

  useEffect(() => {
    console.log('efect 2', compSelection)
    if(compSelection){
      console.log()
      // setBackground("blue-background")
      const win = evalResult(userSelection!, compSelection!);
      console.log(win)
      setWinner(win!);
    }

  }, [compSelection]);

  const handleUserSelect = (type: elementTypes) => {
    // setBackground('green-background');
    console.log(type); setUserSelection(type)
  };

  const handleReset = () => {
    setUserSelection(undefined);
    setCompSelection(undefined);
    setWinner(undefined);
    setBackground("");
  }
    return (
      <>
        <h2 className="title">Scissor paper rock</h2>
        <Element type="Rock" userSelects={handleUserSelect} computerChoice={compSelection}/>
        <Element type="Paper" userSelects={handleUserSelect} computerChoice={compSelection}/>
        <Element type="Scissor" userSelects={handleUserSelect} computerChoice={compSelection}/>
        <WinCount winner={winner} />

        <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/>
        <button onClick={handleReset}>Try Again</button>
      </>
    );
  }
  
  export { App };