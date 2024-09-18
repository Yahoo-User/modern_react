// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import "@kfonts/d2coding"
import "./App.css"

import { useClock } from "./hooks"
import Clock from "./pages/Clock"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    
    let now = useClock()
    console.log("now:", now)
    
    console.groupEnd()

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

