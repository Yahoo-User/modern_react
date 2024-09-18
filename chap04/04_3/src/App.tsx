// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import "./App.css"

import ArrayState from "./pages/ArrayState"
// import ObjectState from "./pages/ObjectState"
// import BasicForm from "./pages/BasicForm"
// import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest"
// import RadioInputTest2 from "./pages/RadioInputTest2"
// import RadioInputTest1 from "./pages/RadioInputTest1"
// import ShowHideModal from "./pages/ShowHideModal"
// import InputTestStep1 from "./pages/InputTestStep1"
// import InputTestStep2 from "./pages/InputTestStep2"
// import NumberState from "./pages/NumberState"
// import Temp from "./pages/Temp"


const App = () => {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element". (***)
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
    return (
        <div className="App">
            <h3>src/App.tsx</h3>
            <hr />

            {/* main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>; */}
            <main className="text-base">
                <ArrayState />
                {/* <ObjectState /> */}
                {/* <BasicForm /> */}
                {/* <HigherOrderRadioInputTest /> */}
                {/* <RadioInputTest2 /> */}
                {/* <RadioInputTest1 /> */}
                {/* <ShowHideModal /> */}
                {/* <InputTestStep1 /> */}
                {/* <InputTestStep2 /> */}
                {/* <NumberState /> */}
                {/* <Temp /> */}
            </main>
        </div>
    )
} // App


export default App;


