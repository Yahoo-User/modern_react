// Functional Component.

export default
function DispatchEvent() {
    const rootDiv = document.querySelector<HTMLElement>("#root")

    const invokeDispatchEvent = () => {
        // TypeScript Optional Chaining Operator, Symbol(?.)
        rootDiv?.dispatchEvent(new Event("click", { bubbles: true }))
    } // onCallDispatchEvent

    // ----------------------------------

    const invokeClick = () => {
        // TypeScript Optional Chaining Operator, Symbol(?.)
        rootDiv?.click()
    } // onCallClick

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>DispatchEvent</p>
            <button onClick={ invokeDispatchEvent }>8-1. Call EventTarget.dispatchEvent</button>
            <button onClick={ invokeClick }>8-2. Call HTMLElement.click</button>
        </li>
    )
} // DispatchEvent



