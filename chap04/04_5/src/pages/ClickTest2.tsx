import React, { useCallback, useRef } from "react"

import {Title} from "../components"


// Functional Component.
export default
function ClickTest2(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ClickTest2) ●●●")

    const inputRef = useRef<HTMLInputElement | null>(null)
    // console.log("1. inputRef:", inputRef)

    // -----------------------

    const onClick = useCallback(() => {
        // console.log("2. inputRef:", inputRef)
        inputRef.current?.click()
    }, [])

    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl text-left">2. src/pages/ClickTest2</Title>
            <br />

            <div className="flex items-center justify-center mt-4">
                <button className="mr-4 btn btn-primary" onClick={onClick}>Click Me</button>
                
                <input ref={inputRef} type="file" className="hidden" accept="image/*" />
            </div>
        </section>
    )
} // ClickTest2

