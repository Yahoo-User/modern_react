import type { SyntheticEvent } from "react"


// Functional Component.
export default
function ReactOnClick() {
    const onClick = (e: SyntheticEvent) => {                        // OK
    // const onClick = (e: SyntheticEvent<HTMLElement, Event>) => {    // OK
        console.group("ReactOnClick")
        
        const { isTrusted, target, bubbles } = e
        console.log("Mouse Clicked:", isTrusted, target, bubbles)
        console.log("SyntheticEvent:", e)

        console.groupEnd()
    } // onClick Event Handler defined.

    // ----------------------------------
        
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>ReactOnClick</p>
            <button onClick={ onClick }>Click Me</button>
        </li>
    )
} // ReactOnClick

