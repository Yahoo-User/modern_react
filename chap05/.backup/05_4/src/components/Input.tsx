import type { DetailedHTMLProps, InputHTMLAttributes, FC } from "react"
import { useEffect } from "react"


export
type ReactInputProps =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// ---------------------------

// Functional Component<P>
let renderCount: number = 0

export
const Input: FC<ReactInputProps> = ({ ...props }) => {
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
    console.group("●●● (src/components/Input) ●●●")
    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <input {...props} />
} // Input


