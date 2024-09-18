/**
 * The "CallBack" could be set into the "onClick" property of React component
 * and be transfered required data into the callback using "High-Order" function.
 */

import { useMemo, useCallback } from "react";

import { Title } from "../components";
import { Button } from "../theme/daisyui";
import * as D from "../data"


// Functional Component.
export default
function HighOrderCallback() {
    // console.clear()
    // console.group("●●● (src/pages/HighOrderCallback) ●●●")
    // console.groupEnd()
    
    const onClick: (name: string) => () => void = 
        useCallback((name: string) => () => alert(`${name} clicked.`), [])

    // ----------------------------

    //                 Dependency Relationship
    //  "buttons"   -----------------------------> "onClick"
    const buttons = useMemo(() => D.makeArray<number>(3, 0)
        .map(D.randomName)
        
        // ts(2657)  - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        .map((name, index) => (
                <Button
                    key={index}
                    
                    // The value provides a callback and data at the same time
                    // with High-order function.    (***)
                    onClick={ onClick(name) }
                    
                    className="text-xl text-white normal-case border-4 border-white btn bg-sky-400">
                    {name}
                </Button>
            )
        ), [onClick])

    // ----------------------------
       
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <Title>HighOrderCallback</Title>
            <div className="flex mt-4 justify-evenly">{buttons}</div>
        </div>
    )
} // HighOrderCallback

