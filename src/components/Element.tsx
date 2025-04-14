import { useEffect, useState } from "react";

type elementProps = {
    type: string,
    style?: string,
    userSelects: Function,
    computerChoice?: string,
}

function Element({type, userSelects, computerChoice}: elementProps){
    const [userSelected, setSelected] = useState<boolean>(false);
    const [background, setBackground] = useState<string>('')

    useEffect(() => {
        if(computerChoice == type) { setBackground('blue-background')}
    }, [computerChoice])
    
    return (
        <div className="element">
            <button className={`border ${background} ${ userSelected ? 'green-background' : ''}`} onClick={() =>
                {
                    setSelected(true);
                    userSelects(type)} }>
            {type}</button>
        </div>
    )
};

export {Element};