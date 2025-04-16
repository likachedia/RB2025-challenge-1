import { elementTypes, WinType } from "../types/types";

export function evalResult(userChoice: elementTypes, computerChoice: elementTypes){
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

  export function generateComputerAnswer(): elementTypes {
    const randomNum = Math.random() * 1000; 
  
    if(randomNum > 650){
      return elementTypes.ROCK;
    } else if(randomNum > 350){
      return elementTypes.PAPER;
    } else {
      return elementTypes.SCISSOR;
    }
  }