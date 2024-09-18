import {useRef, useEffect} from "react"

import {Title} from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle),[])
 */

// Functional Component.
export default
function InputFocusTest(): JSX.Element {
    console.group("●●● (src/pages/InputFocusTest) ●●●")

    const inputRef = useRef<HTMLInputElement>(null)
    console.log("1. inputRef(", inputRef, "), inputRef.current(", inputRef.current, ")")

    // -----------------------
    useEffect(() => inputRef.current?.focus(), [])  // useEffect

    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl font-bold text-center">InputFocusTest</Title>
            
            <div className="flex justify-center mt-4">
                <input ref={inputRef} className="input input-primary" placeholder="enter some text" />
            </div>
        </section>
    )
} // InputFocusTest

