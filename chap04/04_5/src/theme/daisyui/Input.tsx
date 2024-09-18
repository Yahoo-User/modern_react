import type {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import { forwardRef } from "react"


export
type ReactInputProps = 
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// ---------------------------

export
type InputProps = ReactInputProps & {}

// ---------------------------

// Functional Component.

/* The following code cannot be transfered "ref" property in custom component.  (***)

export
const Input: FC<InputProps> = ({
    className: _className,
    ...inputProps
}) => {
    // console.clear();
    // console.group(
    //     ">>> Input(",
    //     "\n\tclassName:", _className,
    //     "\n\tinputProps:", inputProps,
    //     "\n) invoked."
    // )

    // console.clear()
    console.group("●●● (Input) ●●●")

    const className = ['input', _className].join(' ')
    // console.log("1. className:", className)
    
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.

    return <input {...inputProps} className={className} />       // Previous code.
} // Input
*/


// Re-define to be transfered "ref" property with "forwardRef" function.   (***)

/*
    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, P>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
    -------------------------------
    interface ForwardRefRenderFunction<T, P = {}> {
        ① (props: P, ref: ForwardedRef<T>): ReactNode;

        ② displayName?: string | undefined;
           // defaultProps are not supported on render functions
        ③ defaultProps?: never | undefined;
           // propTypes are not supported on render functions
        ④ propTypes?: never | undefined;
    }
    -------------------------------
    type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];
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
*/

export
// ① (parameter) props: InputProps
// ② (parameter) ref: React.ForwardedRef<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ')

    return <input ref={ref} {...inputProps} className={className} />
}) // Input


