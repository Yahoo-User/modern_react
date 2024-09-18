import {useRef, useCallback, useEffect} from "react"

import {Title} from "../components"
import {Input} from "../theme/daisyui"


// Functional Component.
export default
function FowardRefTest(): JSX.Element {
    console.group("●●● (src/pages/FowardRefTest) ●●●")

    // 1. The "useRef" is a React Hook that 
    //    lets you reference a value that is *NOT* needed for "rendering":
    //      const ref = useRef(initialValue)
    
    const inputRef = useRef<HTMLInputElement>(null)
    // console.log("1. inputRef:", inputRef)

    // ----------------------
    // 2. The "useCallback" is a React Hook 
    //    that lets you cache a "function definition" between "re-renders":
    //      const cachedFn = useCallback(fn, dependencies)
    
    const getValue =
        useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])
    // console.log("2. getValue:", getValue)

    // ----------------------
    // 3. The "useEffect" is a React Hook
    //    that lets you "synchronize" a component with an "external system".
    //      useEffect(setup, dependencies?)

    useEffect(() => inputRef.current?.focus(), [])
    
    console.groupEnd()
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl font-bold text-center">ForwardRefTest</Title>

            <div className="flex justify-center mt-4">
                <div className="flex flex-col w-1/3 p-2">
                    
                    {/* Warning: "Function" components cannot be given "refs".
                        Attempts to access this "ref" will fail. Did you mean to use "React.forwardRef()" ? */}
                    <Input ref={inputRef} className="input-primary" />
                    
                    <button onClick={getValue} className="mt-4 btn btn-primary">
                        get value
                    </button>
                    
                </div>
            </div>
        </section>
    )
} // FowardRefTest

