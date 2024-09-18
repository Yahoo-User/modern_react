import type { ReactInputProps } from "./Input"
import { forwardRef, useImperativeHandle, useMemo} from "react"


// Functional Component.

/*
    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, P>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
    -------------------------------
    interface ForwardRefRenderFunction<T, P = {}> {
        ① (props: P, ref: ForwardedRef<T>): ReactNode;
        ② displayName?: string | undefined;
        ③ defaultProps?: never | undefined;     // "defaultProps" are *NOT* supported on "render" functions
        ④ propTypes?: never | undefined;        // "propTypes"    are *NOT* supported on "render" functions
    }
    -------------------------------
    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
    -------------------------------
    interface MutableRefObject<T> {
        current: T;
    }
    -------------------------------
    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }
    -------------------------------
    type ReactNode =
        | ReactElement
        | ...
*/

export
type ValidatableInputMethods1 = {}


// -----------------------------------------------------------------
// What if "T": ValidatableInputMethods1, "P": ReactInputProps ???
// -----------------------------------------------------------------
// This 

// 1. forwardRef<T, P = {}>(render)
// 2. render: ForwardRefRenderFunction<T, P>
// 3. interface ForwardRefRenderFunction < T, P = {} > {
//      ① (props: P, ref: ForwardedRef<T>): ReactNode;
//    }
// 4. type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

export
const ValidatableInput1 = forwardRef<ValidatableInputMethods1, ReactInputProps>(
    ({className: _className, ...inputProps}, methodsRef) => {
        // console.clear()
        console.group("●●● (src/theme/ValidatableInput1) ●●●")

        console.log("1. methodsRef:", methodsRef)

        // 1. The "useMemo" is a React Hook that lets you cache the result of a calculation between "re-renders":
        //      const cachedValue = useMemo(calculateValue, dependencies)
        const className = useMemo(() => ['input', _className].join(' '), [_className])      // <--- ***
        console.log("2. className:", className)

        // 2. The "useImperativeHandle" is a React Hook that lets you customize the handle exposed as a "ref".
        //      useImperativeHandle(ref, createHandle, dependencies ?)
        useImperativeHandle(methodsRef, () => ({}), [])                                     // <--- ***

        
        return <input {...inputProps} className={className} />
    } // render: ForwardRefRenderFunction<T, P>
) // ValidatableInput1


