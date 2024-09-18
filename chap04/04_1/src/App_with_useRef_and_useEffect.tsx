// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import type { MutableRefObject } from "react"
import { useEffect, useRef } from "react"

import "@kfonts/d2coding"
import "./App.css"
import Clock from "./pages/Clock"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    
    // "useRef" hook would *NOT* re-render the React component. (***)
    let now: MutableRefObject<Date> = useRef<Date>(new Date())
    // console.log("now:", now)

    console.groupEnd()

    useEffect(() => {
        console.debug(">>> useEffect() invoked.")

        // ----------------------
        // Executed *ONCE*, When this React component is created for the first time.
        // ----------------------
        const id = setInterval(() => {
            now.current = new Date()
            console.log("\t+ now.current:", now.current.toLocaleTimeString())
        }, 1000 * 1)

        // ----------------------
        // Executed *ONCE* to return a function of () => void,
        // When the React component will be destroyed.
        // ----------------------
        return () => clearInterval(id)
    }, [])

    // ------------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="App">
            <h3>src/App.tsx</h3>
            <hr />

            <Clock today={now.current} />
        </div>
    )
} // App

