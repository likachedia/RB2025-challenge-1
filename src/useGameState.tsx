import { useState } from "react";
import { elementTypes, WinType } from "./lib/types/types";

export interface Game {
    winner: WinType | undefined,
    userSelection: elementTypes | undefined,
    compSelection: elementTypes | undefined,
    reset: boolean;
}

export function useGameState(){
      const [winner, setWinner] = useState<WinType | undefined>();
      const [userSelection, setUserSelection] = useState<elementTypes | undefined>();
      const [compSelection, setCompSelection] = useState<elementTypes | undefined>();
      const [reset, setReset] = useState<boolean>(false);
    return {
        winner,
        setWinner: setWinner,
        userSelection,
        setUserSelection,
        compSelection,
        setCompSelection,
        reset, 
        setReset,
    }
}