import type { JSX } from "react"
import P from "./P"


export default
function App(): JSX.Element {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // ----------------------------
    // (3) How to use `children` property in the `User-defined` component.
    // ----------------------------
    const texts = ["Hello", "World!!!"].map((value, index) => <P key={index} children={value} />)

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div>{texts}</div>
} // App


