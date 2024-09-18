import React, { useCallback, useRef } from "react"
import {Title} from "../components"


// Functional Component.
export default
function ClickTest1(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ClickTest1) ●●●")
    console.groupEnd()
    
    const inputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    // -----------------------

    const onClick = useCallback(() => {
            // Initial value is "null",
            // But React changes null to valid value then. (***)
            const input = inputRef.current

            if (!input) return
            input.click()
        },
        
        // DL : Dependency List
        // [inputRef.current]		// 1st. case : Event included in DL, No re-render.	(***)
        []						// 2nd. case : No re-rendering requested.	(***)
    ) // onClick

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <Title className="text-3xl text-left">1. src/pages/ClickTest1</Title>
            <br />
            
            <input type="file" ref={inputRef} accept="image/*" className="btn" />
            <p>&nbsp;</p>
            <button onClick={onClick} className="btn btn-primary">Click Me</button>
        </div>
    )
} // ClickTest1



