import type { ReactInputProps } from "./Input"
import { forwardRef, useImperativeHandle, useMemo} from "react"


export
type ValidatableInputMethods1 = {}

// ---------------------------

// -----------------------------------------------------------------
// What if "T": ValidatableInputMethods1, "P": ReactInputProps ???
// -----------------------------------------------------------------
// This,
//      1. forwardRef<T, P = {}>(render)
//      2. render: ForwardRefRenderFunction<T, P>
//      3. interface ForwardRefRenderFunction < T, P = {} > {
//              (props: P, ref: ForwardedRef<T>): ReactNode;
//         }
//      4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

// Functional Component.

export
const ValidatableInput1 = forwardRef<ValidatableInputMethods1, ReactInputProps>(
    ({className: _className, ...inputProps}, methodsRef) => {
        console.group("●●● (src/theme/ValidatableInput1) ●●●")
        // console.log("methodsRef:", methodsRef)
        console.groupEnd()

        // 1. The "useMemo" is a React Hook that lets you cache the result of a calculation between "re-renders":
        //      const cachedValue = useMemo(calculateValue, dependencies)
        const className = useMemo(() => ['input', _className].join(' '), [_className])      // <--- ***

        // 2. The "useImperativeHandle" is a React Hook that lets you customize the handle exposed as a "ref".
        //      useImperativeHandle(ref, createHandle, dependencies ?)
        useImperativeHandle(methodsRef, () => ({}), [])                                     // <--- ***

        // ---------------------------

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <input {...inputProps} className={className} />
    } // render: ForwardRefRenderFunction<T, P>
) // ValidatableInput1


