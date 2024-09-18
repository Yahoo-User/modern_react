// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import "./App.css"

import FetchTest from "./pages/FetchTest";
// import WindowResizeTest from "./pages/WindowResizeTest";
// import ClassLifecycle2 from "./pages/ClassLifecycle2";
// import ClassLifecycle1 from "./pages/ClassLifecycle1";


function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <main className="mt-2 ml-2">
            <h3 className="text-lg text-red-700">src/App.tsx</h3>
            <hr /><br />
            
            <FetchTest />
            {/* <WindowResizeTest /> */}
            {/* <ClassLifecycle2 /> */}
            {/* <ClassLifecycle1 /> */}
        </main>
    )
} // App

export default App;

