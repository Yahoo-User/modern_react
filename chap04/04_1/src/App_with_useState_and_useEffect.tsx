// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import { useEffect, useState } from "react"

import "@kfonts/d2coding"
import "./App.css"

import Clock from "./pages/Clock"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    
    /*
        The "useState" React Hook is like "useRef" but *Re-render* the React Component. (***)
        The usage of "useState":
            const [currentValue, setter] = useState(initialValue)
            setter = (newValue) => void
     */
    let [now, setNow]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState<Date>(new Date())
    console.log("now:", now)

    console.groupEnd()
    
    useEffect(() => {
            console.debug(">>> useEffect() invoked.")

            // ----------------------
            // Executed *ONCE*, When this React component is created for the first time.
            // ----------------------
            const duration  = 1000 * 1
            
            const id = setInterval(() => {
                setNow(new Date())
                console.log("\t+ now:", now.toLocaleTimeString())
            }, duration)

            // ----------------------
            // Executed *ONCE* to return a function of () => void,
            // When the React component will be destroyed.
            // ----------------------
            return () => clearInterval(id)
        }, 
        /* --- Warning --- *
         * React Hook "useEffect" has a missing dependency: 'now'.
         * Either "include" it or "remove" the "dependency array".
         */
        // []       // OK : To solving the above warning, removed DL
    )

    // ------------------------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="App">
            <h3>src/App.tsx</h3>
            <hr />

            <Clock today={ now }/>
        </div>
    )
} // App

