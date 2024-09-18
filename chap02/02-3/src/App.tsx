// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import { JSX } from "react"

import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";


// const App = () => {                    // OK
const App: () => JSX.Element = () => {    // OK
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ul>
            <ClassComponent href="http://www.google.com"    text="1. Go to Google" />
            <ArrowComponent href="http://www.facebook.com"  text="2. Go to Facebook" />
        </ul>
    )
} // App

export default App;






