import type { SyntheticEvent } from "react"


// Functional Component.
export default
function StopPropagation() {
    const onDivClick = (e: SyntheticEvent) => console.log("on <div>:", e)

    // ----------------------------------

    const onButtonClick = (e: SyntheticEvent) => {
        e.stopPropagation() // Event Capturing
        console.log("on <button>:", e)
    } // onButtonClick

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li onClick={ onDivClick }>
            <p>StopPropagation</p>
            <button onClick={ onButtonClick }>Click Me and Event Capturing</button>
        </li>
    )
} // StopPropagation
