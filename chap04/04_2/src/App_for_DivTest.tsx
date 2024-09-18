// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import "./App.css"

import { DivTest } from "./components"


export default
function App() {

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/App.tsx</h3>
            <hr />

            <DivTest name="Yoseph" age={23} id="ID" className="_className" style={{ color: 'blue' }}>
                <div>
                    <p>Hello, World</p>
                </div>
            </DivTest>
        </div>
    )
} // App

