import { useEffect, useState } from "react";
import { Element } from "./components/Element";
import { WinCount } from "./components/WinCount";
import { Result } from "./components/Result";
import { elementTypes, evalResult, WinType } from "./Utils";

// თუ არ ვცდები 7-8 ლექქციაში არი ესლინტ და პრეტიერი ახსნილი რისთვის ვიყენებთ და როგორ
// !ყოველთვის ჯობია პროექტის დონეზე კონფოგურაციიის აღწერა

// ასეთი დამხმარე ფუნქციები ჯობია ერთ საქაღალდეში მოვაქციოთ
// /src/lib/helpers/*.ts  ვიყენებთ
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
  // შეგიძლია ერთ სტეიტში აღწერო
  // კასტომ ჰუკისთვის იდეალური ადგილია
  // const {} = useGameState()
  // დააბრუნო შესაბამისი სტეიტი და მეთოდები მაგ: resetGame()
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

   /*
        უმჯობესია ფუნცქციის დეკლარაცია გამოიყენო ვიდრე ექსპრეშენი
        hoisting ერორს არიდებ თავიდან, ყოველ რენდერზე არ მოხდება ფუნქციის რედეკლარაცია
        უფრო კითხვადი და გასაგებია
        function handleUserSelect(){}
    */
  const handleUserSelect = (type: elementTypes) => {
      setUserSelection(type)
  };

  // აქაც ფუნცქციის დეკლარაცია
  const handleReset = () => {
    setUserSelection(undefined);
    setCompSelection(undefined);
    setWinner(undefined);
    setReset(true);
  }

    return (
      <>
        <h2 className="title">Scissor paper rock</h2>
        {/*
          /lib/config/*.ts ში შეგიძლია შემდეგი კონფიგურაცია აღწერო
          const elements = [
            { type: elementTypes.ROCK },
            { type: elementTypes.PAPER },
            { type: elementTypes.SCISSOR }
          ]
           აქ გადაუარო map((element) => <Element type={element.type}  დანარჩენი საჭირო პროპსები/>)

        */}

        <Element type="Rock" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Paper" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <Element type="Scissor" userSelects={handleUserSelect} computerChoice={compSelection} reset={reset}/>
        <WinCount winner={winner} />

        {/* ან აქვე შეგიძლია დაჰენდლო  */}
        {/* {winner ? <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/> : null} */}
        <Result  winner={winner} userChoice={userSelection} computerChoice={compSelection}/>
        <button onClick={handleReset}>Try Again</button>
      </>
    );
}

  export { App, WinType };