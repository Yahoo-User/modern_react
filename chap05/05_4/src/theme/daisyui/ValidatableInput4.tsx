import {forwardRef, useImperativeHandle, useMemo, useRef} from "react"
import { useEffect } from "react"

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
// This,
//   1. forwardRef<T, P = {}>(render)
//   2. render: ForwardRefRenderFunction<T, P>
//   3. interface ForwardRefRenderFunction < T, P = {} > {
//        ① (props: P, ref: ForwardedRef<T>): ReactNode;
//      }
//   4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
let renderCount: number = 0

export
const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(

    // render: ForwardRefRenderFunction<T, P> == (props: P, ref: ForwardedRef<T>): ReactNode
    ({ type, className: _className, ...inputProps }, methodsRef) => {
        /*
            In this variant of "useEffect", the following message will be printed
            when the component is "mounted" and every time the component "state" or "props" is updated.
            
            If you want to see logs only when the component re-renders,
            the simplest way is to make a "useEffect" hook *Without* a "dependency array",
            this will make it run after each component render.
        */
        useEffect(() => {
            console.log(`☞ [ ValidatableInput ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
        })

        // -----------------------
        console.group("●●● (src/theme/ValidatableInput) ●●●")
        console.groupEnd()

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


