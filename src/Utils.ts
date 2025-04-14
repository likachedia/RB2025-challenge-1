export enum elementTypes {
  ROCK = 'Rock',
  PAPER = 'Paper',
  SCISSOR = 'Scissor',
}

export enum WinType {
  USER = 'User',
  COMPUTER = 'Computer',
  DRAW = 'Draw'
}

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