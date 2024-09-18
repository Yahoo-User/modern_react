// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import { Provider as ReduxProvider } from "react-redux"

import "./App.css"

import { useStore } from "./store"
import CardsTest from "./pages/cards/CardsTest"
// import RemoteUserTest from "./pages/RemoteUserTest"
// import CounterTest from "./pages/CounterTest"
// import ClockTest from "./pages/ClockTest"


export default
function App2() {
    console.group("♠♠♠♠♠♠♠ (src/App2) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // A redux store returned by "configureStore()" function provided by "RTK".	(***)
    const store = useStore()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ReduxProvider store={ store }>
            <h3 className="text-xl text-red-500">src/App2.tsx</h3>
            <hr /><br />

            <CardsTest />
            {/* <RemoteUserTest /> */}
            {/* <CounterTest /> */}
            {/* <ClockTest /> */}
        </ReduxProvider>
    )
} // App2




