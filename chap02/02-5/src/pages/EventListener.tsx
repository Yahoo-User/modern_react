// ------------------------------------------
// `EventTarget.addEventListener` method
// ------------------------------------------
// Several event handlers could be appended to the same HTML element
// through `EventTarget.addEventListener` method.

// const rootDiv = document.querySelector("#root") as HTMLElement  // OK
const rootDiv = document.querySelector<HTMLElement>("#root")    // OK

// ----------------------------------

// Symbol, "?." : TypeScript Optional Chanining Operator
rootDiv?.addEventListener("click", (e: Event) => {
    const { isTrusted, target, bubbles } = e
    console.log(`1. Mouse Clicked In <rootDiv>: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles})`)
})

// ----------------------------------

// Symbol, "?." : TypeScript Optional Chanining Operator
rootDiv?.addEventListener("click", (e: Event) => {
    const { isTrusted, target, bubbles } = e
    console.log(`2. Mouse Clicked In <rootDiv>: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles})`)
})

// ----------------------------------

// error ts(2779) - The left-hand side of an assignment expression may not be an optional property access.
// document.querySelector("#root")?.onclick = (e: Event) => console.log(e)     // XX

// ----------------------------------

// Functional Component.
export default
function EventListener() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <li>EventListener</li>
} // EventListener


