import type {FC, DetailedHTMLProps, InputHTMLAttributes} from 'react'


export
type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// ---------------------------

export
type inputProps = ReactInputProps & {}

// ---------------------------

// Functional Component.
export
const Input: FC<inputProps> = ({
    className: _className,
    ...inputProps
}) => {
    // console.clear()
    console.group("●●● (src/theme/daisyui/Input) ●●●")

    const className = ['input', _className].join(' ')
    // console.log("1. className:", className)
    
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input {...inputProps} className={className} />
} // Input
