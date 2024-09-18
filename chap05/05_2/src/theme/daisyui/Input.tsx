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
    console.group("●●● (src/theme/daisyui/Input) ●●●")
    console.groupEnd()

    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ')

    // -----------------------

    return <input ref={ref} {...inputProps} className={className} />
}) // Input



