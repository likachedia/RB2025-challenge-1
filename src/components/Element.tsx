import { useEffect, useState } from "react";

type elementProps = {
    type: string,
    userSelects: Function,
    computerChoice?: string,
    reset?: boolean,
}

function Element({type, userSelects, computerChoice, reset}: elementProps){
    const [userSelected, setSelected] = useState<boolean>(false);
    const [background, setBackground] = useState<string>('')

    useEffect(() => {
        if(computerChoice == type) { setBackground('blue-background')}
    }, [computerChoice])

    useEffect(() => {
        if(reset) {
            setSelected(false);
            setBackground("");
        }
    }, [reset])

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