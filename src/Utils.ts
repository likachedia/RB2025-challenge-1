/* რეაქტი არ გვაძალებს ფაილის სახელი რა უნდა ერქვას ან სად შეგვიძლია კონფოგურაცია აღვწეროთ.
   ჩვენთვის კითხვადია,  მსგავსი კონფოგურაცია 1 ადგილას მოვაქციოთ
   ფაილი თუ კომპონენტს არ აბრუნებს არ გვინდა სახელი ქამელქქეისში
*/


// ტაიპსკრიტპის სპეციფიური კონფიგურაციები /types/*.ts  ში გავიტანოთ
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

// დამხმარე ფუნქციისთვიის /src/lib/helpers/*.ts  იდეალური ადგილია
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