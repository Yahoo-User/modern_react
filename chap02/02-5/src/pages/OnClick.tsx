// const rootDiv: HTMLElement | null = document.getElementById("root")         // OK
// const rootDiv = document.querySelector("#root") as HTMLElement              // OK
const rootDiv = document.querySelector<HTMLElement>("#root")                // OK

// ----------------------------------

if(rootDiv) {
    rootDiv.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e
        console.log(`1. Mouse Clicked: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles})`)
    } // .onclick

    // ----------------------------------

    // Last Event Handler Overwrites The Previous Event Handler
    // If Using Global Event Attributes.    (***)
    rootDiv.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e
        console.log(`2. Mouse Clicked: isTrusted(${isTrusted}), target(`, target, `), bubbles(${bubbles})`)
    } // .onclick
} // if

// ----------------------------------

// Functional Component.
export default
function OnClick() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <li>OnClick</li>
} // OnClick

