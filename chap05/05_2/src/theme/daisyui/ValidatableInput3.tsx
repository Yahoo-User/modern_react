import { forwardRef, useImperativeHandle, useMemo } from "react"

import type { ReactInputProps } from "./Input"


// Functional Component.

export
type ValidatableInputMethods3 = {
    // This method works that
    //  ① If email address is validate, 
    //     returns "[true, the value prop of <input>]" by tuple.

    //  ② If email address is *NOT* validate,
    //     returns "[false, 'Wrong email address']" error message by tuple.\

    validate: () => [boolean, string]                                               // <--- ***
}

// ---------------------------


// -----------------------------------------------------------------
// What if "T": ValidatableInputMethods3, "P": ReactInputProps ???
// -----------------------------------------------------------------
//  1. forwardRef<T, P = {}>(render)
//  2. render: ForwardRefRenderFunction<T, P>
//  3. interface ForwardRefRenderFunction < T, P = {} > {
//        (props: P, ref: ForwardedRef<T>): ReactNode;
//     }
//  4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

export
const ValidatableInput3 = forwardRef<ValidatableInputMethods3, ReactInputProps>(
    ({type, className: _className, ...inputProps}, methodsRef) => {                         // <--- ***
        // 1. The "useMemo" is a React Hook that lets you cache the result of a calculation between "re-renders":
        //      const cachedValue = useMemo(calculateValue, dependencies)
        const className = useMemo(() => ['input', _className].join(' '), [_className])      // <--- ***

        // ---------------------------

        // 2. The "useImperativeHandle" is a React Hook that lets you customize the handle exposed as a "ref".
        //      useImperativeHandle(ref, createHandle, dependencies ?)
        useImperativeHandle(methodsRef, () => ({                                            // <--- ***
            // This method works that
            //  ① If email address is validate, 
            //     returns "[true, the value prop of <input>]" by tuple.
            //  ② If email address is *NOT* validate,
            //     returns "[false, 'Wrong email address']" error message by tuple.
            
            validate: () => {                                                               // <--- ***
                // If *ONLY "type" property is "email", Do validate ...                     (***)

                // switch(type) {
                //     case "email": break
                // }

                // ...
                //                   ----------- *** ------------
                return true ? [true, "The 'value' prop of <input>"] : [false, "Wrong email adderess"]
            } // validate
        }), [])                                     // <--- ***

        // ---------------------------

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <input {...inputProps} className={className} />
    } // render: ForwardRefRenderFunction<T, P>
) // ValidatableInput3




