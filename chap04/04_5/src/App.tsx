// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import './App.css';

import ValidatableInputTest from "./pages/ValidatableInputTest";
// import FowardRefTest from './pages/ForwardRefTest';
// import InputValueTest from "./pages/InputValueTest";
// import InputFocusTest from "./pages/InputFocusTest";
// import FileDrop from "./pages/FileDrop";
// import ClickTest2 from "./pages/ClickTest2"
// import ClickTest1 from "./pages/ClickTest1"


// Functional Component.
function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <main className='mt-2 ml-4'>
            <h3 className="text-lg text-red-600">src/App.tsx</h3>
            <hr /><br />

            <ValidatableInputTest />
            {/* <FowardRefTest /> */}
            {/* <InputValueTest /> */}
            {/* <InputFocusTest /> */}
            {/* <FileDrop /> */}
            {/* <ClickTest2 /> */}
            {/* <ClickTest1 /> */}
        </main>
    );
} // App

export default App;
