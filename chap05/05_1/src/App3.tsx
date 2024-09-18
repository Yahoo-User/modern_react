// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import { Provider as ReduxProvider } from "react-redux"

import './App.css';

import { useStore } from "./store"

import UseReducerClock from './pages/UseReducerClock';
// import ReduxClock2 from './pages/ReduxClock2';
// import ReduxClock1 from './pages/ReduxClock1';


// To implement a Clock with the "Redux" (== state container)
function App3() {
    console.group("♠♠♠♠♠♠♠ (src/App3) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // A Redux store returned by "configureStore()" function provided by "RTK".	(***)
    const store = useStore()    

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        // To use "Redux" features,
        // The "Provider" component of "React context" should be located at the top level of the component.
        <ReduxProvider store={ store }>
            <main className='p-8'>
                <h3 className='text-xl font-bold text-red-500'>src/App.tsx</h3>
                <hr /><br />
                
                <UseReducerClock />
                {/* <ReduxClock2 /> */}
                {/* <ReduxClock1 /> */}
            </main>
        </ReduxProvider>
    )
} // App3


export default App3;




