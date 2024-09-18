// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import "@kfonts/d2coding"
import "./App.css"

import Clock from "./pages/Clock"
import { useEffect } from "react"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
   
    let now: Date = new Date()
    // console.log("now:", now)

    console.groupEnd()
    
    // const DL: readonly unknown[] = []        // Related with Warning 2
    
    useEffect(() => {
        // ----------------------
        // Executed *ONCE*, When this React component is created for the first time. <--- *** : ①
        // ----------------------
        
        /* --- WARNING 1 --- *
         * Assignments to the 'now' variable from inside React Hook "useEffect" will be lost after each render.
         * To preserve the value over time, store it in a "useRef" Hook and keep the mutable value in the ".current" property.
         * Otherwise, you can move this variable directly inside "useEffect". */

        const duration = 1000 * 1       // In milliseconds.
        
        const id = setInterval(() => {
            
            /* --- WARNING 3 --- *
             * Automatically NOT refreshed screen to apply update time, "now"
             * Even though current time correcly refreshed by 1 second. */
            now = new Date()            // Related with Warning 1 and 3             <--- *** : ②
            
            console.log("\t+ now:", now.toLocaleTimeString())
        }, duration)

        // ----------------------
        // Executed *ONCE* to return a function of () => void,
        // When the React component will be destroyed.                              <--- *** : ③
        // ----------------------
        return () => clearInterval(id)
    }, 
       /* --- WARNING 2 --- *
        * React Hook "useEffect" was passed a dependency list that is not an "array literal".
        * This means we can't statically verify whether you've passed the correct dependencies. */
       
        // DL       // Warning 2 by "const DL: readonly unknown[] = []"
        []          // Solving the Warning 2                                        <--- *** : ④
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

