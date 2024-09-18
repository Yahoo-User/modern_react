import { forwardRef, useImperativeHandle, useMemo, useRef } from "react"

import type { ReactInputProps } from "./Input"


// Functional Component.

export
type ValidatableInputMethods = {
    validate: () => [boolean, string]                                               // <--- ***
}

// ---------------------------

// -----------------------------------------------------------------
// What if "T": ValidatableInputMethods, "P": ReactInputProps ???
// -----------------------------------------------------------------
//  1. forwardRef<T, P = {}>(render)
//  2. render: ForwardRefRenderFunction<T, P>
//  3. interface ForwardRefRenderFunction < T, P = {} > {
//        (props: P, ref: ForwardedRef<T>): ReactNode;
//     }
//  4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

export
const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(

    // render: ForwardRefRenderFunction<T, P> == (props: P, ref: ForwardedRef<T>): ReactNode
    ({type, className: _className, ...inputProps}, methodsRef) => {
        const className = useMemo(() => ['input', _className].join(' '), [_className])
        const inputRef = useRef<HTMLInputElement>(null)

        // ---------------------------

        useImperativeHandle(methodsRef, () => ({
            validate: (): [boolean, string] => {
                const value = inputRef.current?.value
                if(!value || !value.length) return [false, 'No value']

                switch(type) {
                    case "email": {
                        const regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                        const valid = regEx.test(value)

                        return valid? [true, value] : [false, "Wrong email address"]
                    }
                }

                return [true, value]
            }
        }), [type])

        // ---------------------------

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <input {...inputProps} className={className} ref={inputRef} />
    } // render

) // ValidatableInput


