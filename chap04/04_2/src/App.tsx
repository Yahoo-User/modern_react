// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import "@kfonts/d2coding"
import "./App.css"

import HighOrderCallback from "./pages/HighOrderCallback";
// import Callback from "./pages/Callback";
// import Memo from "./pages/Memo";
// import UseOrCreateTest from "./pages/UseOrCreateTest";


function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="text-2xl App">
            <HighOrderCallback />
            {/* <Callback /> */}
            {/* <Memo /> */}
            {/* <UseOrCreateTest /> */}
        </div>
    )
} // App

export default App;

