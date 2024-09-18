import { useCallback, useRef } from "react"

import { Title } from "../components"

import type { ValidatableInputMethods } from "../theme/daisyui"
import { ValidatableInput } from "../theme/daisyui"

// import { ValidatableInputMethods3 } from "../theme/daisyui"
// import { ValidatableInput3 } from "../theme/daisyui"

// import { ValidatableInputMethods2 } from "../theme/daisyui"
// import { ValidatableInput2 } from "../theme/daisyui"

// import type { ValidatableInputMethods1 } from "../theme/daisyui"
// import { ValidatableInput1 } from "../theme/daisyui"


// Functional Component.
export default
function ValidatableInputTest(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ValidatableInputTest) ●●●")

    const methodsRef = useRef<ValidatableInputMethods>(null)
    // const methodsRef = useRef<ValidatableInputMethods3>(null)
    // const methodsRef = useRef<ValidatableInputMethods2>(null)
    // const methodsRef = useRef<ValidatableInputMethods1>(null)
    
    console.log("1. methodsRef:", methodsRef)
    
    const validateEmail = useCallback(() => {
        console.group("▲▲▲ validateEmail callback ▲▲▲")
        
        if(methodsRef.current) {

            // OK, If <ValidatableInputMethods />
            // OK, If <ValidatableInputMethods3 />
            // OK, If <ValidatableInputMethods2 />
            // XX, If <ValidatableInputMethods1 />
            const [valid, valueOrErrorMessage] = methodsRef.current.validate()
            
            if(valid) alert(`${valueOrErrorMessage} is a valid email address !`)
            else alert(valueOrErrorMessage)
        }
    }, [])
    // console.log("2. validateEmail:", validateEmail)

    console.groupEnd()
    
    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl font-bold text-center">ValidatableInputTest</Title>

            <div className="flex justify-center mt-4">
                <div className="flex flex-col w-1/3 p-2">

                    <ValidatableInput type="email" ref={methodsRef} className="input-primary" />
                    {/* <ValidatableInput3 type="email" ref={methodsRef} className="input-primary" /> */}
                    {/* <ValidatableInput2 type="email" ref={methodsRef} className="input-primary" /> */}
                    {/* <ValidatableInput1 type="email" ref={methodsRef} className="input-primary" /> */}
                    
                    <button onClick={validateEmail} className="mt-4 text-xl btn btn-primary">Validate Email</button>
                </div>
            </div>
        </section>
    )
} // ValidatableInputTest



