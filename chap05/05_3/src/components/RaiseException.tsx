import type { DetailedHTMLProps, HTMLAttributes, FC } from "react"
import { useEffect } from "react"


export
type ReactParagraphProps =
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

// ---------------------------

// Functional Component<P>
let renderCount: number = 0

const RaiseException: FC<ReactParagraphProps> = () => {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ RaiseException ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/components/RaiseException) ●●●")
    console.groupEnd()

    if(true) throw new Error("RaiseException")

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    // return <p>RaiseException</p>
} // RaiseException


export default RaiseException;



