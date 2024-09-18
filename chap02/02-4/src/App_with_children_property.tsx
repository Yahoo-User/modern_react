import type { JSX } from "react"


export default
function App(): JSX.Element {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // ----------------------------
    // (2) `children` property
    // ----------------------------
    const texts = [ "Hello", "World!!!" ].map( (value, index) => <p key={index}>{value}</p> )
    console.log("\t+ texts:", texts)

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div children={texts} />
} // App


