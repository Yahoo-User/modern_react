import type {FC, DetailedHTMLProps, InputHTMLAttributes} from 'react'


export
type ReactInputProps = 
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

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
    console.group("●●● (Input) ●●●")
    console.groupEnd()

    const className = ['input', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input {...inputProps} className={className} />
} // Input

