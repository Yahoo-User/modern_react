/**
 * Invoking "onClick" callback With "useCallback" React Hook.
 */

import { useMemo, useCallback, SyntheticEvent } from "react";

import { Title } from "../components";
import { Button } from "../theme/daisyui/Button";
import * as D from "../data"


export default
function Callback() {
    // console.clear()
    // console.group("●●● (src/pages/Callback) ●●●")
    
    // "callback" function: () => void is created and *Cached* only *ONCE*.
    
    // const onClick: () => void = useCallback(() => alert("button clicked."), [])
    const onClick = useCallback((e: SyntheticEvent) => console.dir(e), [])

    // ----------------------------

    // "useMemo" caches data or return value of a function.

    //             Dependency Relationship
    // "buttons" ----------------------------> "onClick" Callback
    
    const buttons: JSX.Element[] = 
        useMemo(() => D.makeArray<number>(3, 0)
            .map(D.randomName)
            
            // ts(2657)  - JSX expressions must have "one parent element".
            // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
            .map((name, index) => (
                    <Button
                        key={ index }
                        onClick={ onClick }
                        className="text-xl text-white normal-case bg-sky-300 btn border-primary btn-wide btn-ghost">
                        {name}
                    </Button>
                )
            ), [ onClick ])

    // console.log("2. buttons:", buttons)
    
    // console.groupEnd()

    // ----------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="mt-4">
            <Title>Callback</Title>
            
            <div className="flex mt-4 justify-evenly">
                {buttons}
            </div>
        </div>
    )
} // Callback


