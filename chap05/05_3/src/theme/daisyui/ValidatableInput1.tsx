import {forwardRef, useImperativeHandle, useMemo} from "react"
import { useEffect } from "react"

import type { ReactInputProps } from "./Input"


export
type ValidatableInputMethods1 = {}

// ---------------------------

// -----------------------------------------------------------------
// What if "T": ValidatableInputMethods1, "P": ReactInputProps ???
// -----------------------------------------------------------------
// This,
//  1. forwardRef<T, P = {}>(render)
//  2. render: ForwardRefRenderFunction<T, P>
//  3. interface ForwardRefRenderFunction < T, P = {} > {
//      ① (props: P, ref: ForwardedRef<T>): ReactNode;
//      }
//  4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

// Functional Component.
let renderCount: number = 0

export
const ValidatableInput1 = forwardRef<ValidatableInputMethods1, ReactInputProps>(
    ({ className: _className, ...inputProps }, methodsRef) => {
        /*
            In this variant of "useEffect", the following message will be printed
            when the component is "mounted" and every time the component "state" or "props" is updated.
            
            If you want to see logs only when the component re-renders,
            the simplest way is to make a "useEffect" hook *Without* a "dependency array",
            this will make it run after each component render.
        */
        useEffect(() => {
            console.log(`☞ [ ValidatableInput1 ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
        })

        // -----------------------
        console.group("●●● (src/theme/ValidatableInput1) ●●●")
        console.groupEnd()

        // console.log("methodsRef:", methodsRef)

        // 1. The "useMemo" is a React Hook that lets you cache the result of a calculation between "re-renders":
        //      const cachedValue = useMemo(calculateValue, dependencies)
        const className = useMemo(() => ['input', _className].join(' '), [_className])      // <--- ***                                   // <--- ***

        // ---------------------------

        // 2. The "useImperativeHandle" is a React Hook that lets you customize the handle exposed as a "ref".
        //      useImperativeHandle(ref, createHandle, dependencies ?)
        useImperativeHandle(methodsRef, () => ({}), [])                                     // <--- ***

        // ---------------------------

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <input {...inputProps} className={className} />
    } // render: ForwardRefRenderFunction<T, P>
) // ValidatableInput1




