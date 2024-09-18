import type {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import { forwardRef, useEffect } from "react"


export
type ReactInputProps =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// ---------------------------

export
type InputProps = ReactInputProps & {}

// ---------------------------

// Functional Component.
let renderCount: number = 0

/* The following code cannot transfered "ref" property in custom component.  (***)

export
const Input: FC<InputProps> = ({
    className: _className,
    ...inputProps
}) => {
    console.group("●●● (Input) ●●●")
    console.groupEnd()

    const className = ['input', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input {...inputProps} className={className} />       // Previous code.
} // Input
*/


// Re-define to transfer "ref" property with "forwardRef" function.   (***)

// ① (parameter) props: InputProps
// ② (parameter) ref: React.ForwardedRef<HTMLInputElement>
export
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ Input ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/theme/daisyui/Input) ●●●")
    console.groupEnd()

    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input ref={ref} {...inputProps} className={className} />
}) // Input





