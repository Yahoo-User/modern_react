// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import { Provider as ReduxProvider } from "react-redux"

import "./App.css"

import {useStore} from "./store"
import ComponentLifecycle from "./components/ComponentLifecycle"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")

    // A redux store returned by "configureStore()" function provided by "RTK".	(***)
    const store = useStore()
    // console.log("store:", store)

    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ReduxProvider store={store}>
            <main className='p-8'>
                <h3 className='text-xl font-bold text-red-500'>src/App.tsx</h3>
                <hr /><br />
                
                <ComponentLifecycle name="Yoseph" age={23} />
            </main>
        </ReduxProvider>
    )
} // App

