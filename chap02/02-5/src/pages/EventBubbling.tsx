import type { SyntheticEvent } from "react"


// Functional Component.
export default
function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e
        console.log(`onDivClick: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles}), currentTarget(`, currentTarget, `)`)
    } // onDivClick

    // ----------------------------------

    const onButtonClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e
        console.log(`onButtonClick: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles}), currentTarget(`, currentTarget, `)`)
    } // onButtonClick

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li onClick={ onDivClick }>
            <p>EventBubbling</p>
            <button onClick={ onButtonClick }>Click Me</button>
        </li>
    )
} // EventBubbling

