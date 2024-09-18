// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import { Provider as ReduxProvider } from "react-redux"

import "./App.css"
import {useStore} from "./store"


export default
function App() {
    console.group("♠♠♠♠♠♠♠ (src/App1) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // A redux store returned by "configureStore()" function provided by "RTK".	(***)
    const store = useStore()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ReduxProvider store={store}>
            <main className='p-8'>
                <h3 className='text-xl font-bold text-red-500'>src/App.tsx</h3>
                <hr /><br />

                <div />
            </main>
        </ReduxProvider>
    )
} // App




