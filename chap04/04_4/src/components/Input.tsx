import type { DetailedHTMLProps, InputHTMLAttributes, FC } from "react"


export
type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// ---------------------------

// Functional Component<P>
export
const Input: FC<ReactInputProps> = ({...props}) => {
    // console.clear()
    // console.group("●●● (src/components/Input) ●●●")
    // console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input {...props} />
} // Input

