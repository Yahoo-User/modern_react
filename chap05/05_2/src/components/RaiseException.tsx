import type { DetailedHTMLProps, HTMLAttributes, FC } from "react"


export
type ReactParagraphProps =
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

// ---------------------------

// Functional Component<P>
const RaiseException: FC<ReactParagraphProps> = () => {
    console.group("●●● (src/components/RaiseException) ●●●")
    console.groupEnd()

    if(true) throw new Error("RaiseException")

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    // return <p>RaiseException</p>
} // RaiseException


export default RaiseException;


