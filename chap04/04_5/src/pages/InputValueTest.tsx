import {useRef, useCallback, useEffect} from "react"
import {Title} from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle),[])
 */

// Functional Component.
export default
function InputValueTest(): JSX.Element {
    console.group("●●● (src/pages/InputValueTest) ●●●")

    const inputRef = useRef<HTMLInputElement>(null)
    // console.log("01. inputRef:", inputRef)

    // -----------------------
    const getValue = useCallback(() => {
        console.group("▲▲▲ getValue callback ▲▲▲")
        console.log("\t+ inputRef.current?.value:", inputRef.current?.value)
        
        alert(`input value: ${inputRef.current?.value}`)
    }, [])
    // console.log("02. getValue:", getValue)

    // -----------------------
    useEffect(() => {
        console.group("▲▲▲ useEffect callback ▲▲▲")
        console.log("\t+ inputRef(", inputRef, "), inputRef.current(", inputRef.current, ")")

        inputRef.current?.focus()
    }, [])  // useEffect

    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-xl font-bold text-center">InputValueTest</Title>

            <div className="flex justify-center mt-4">
                <div className="flex flex-col w-1/3 p-2">
                    <input ref={inputRef} className="input input-primary" />
                    <button onClick={getValue} className="mt-4 btn btn-primary">get value</button>
                </div>
            </div>
        </section>
    )
} // InputValueTest

