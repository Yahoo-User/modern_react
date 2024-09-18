// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import type { Action } from "redux"
import { Provider as ReduxProvider } from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
// import type { EnhancedStore } from "@reduxjs/toolkit"

import './App.css';

import UseReducerClock from './pages/UseReducerClock';
import ReduxClock1 from './pages/ReduxClock1';


// ① Declare a user-defined "type"
//    which represents "App-Level States", called "App States".
type AppState = {
    today: Date
}

// -------------------------------

// ② Prepare a initial value of user-defined type of "App-Level States".
const initialAppState = {
    today: new Date()
}

// -------------------------------

// ③ The "Reducer" function returns ⓒ new state 
//    created using ⓐ current state and ⓑ action.
const rootReducer = (state: AppState = initialAppState, action: Action) => state

// -------------------------------

// ④ "RTK" (@reduxjs/toolkit) package provides the "configureStore" function
//    which manages "new state" that the "Reducer" function returns as an object,
//    called "Store".

//    A "Redux store" returned by "configureStore()" function provided by "RTK".	(***)

// const store: EnhancedStore = configureStore({ reducer: rootReducer })   // OK
const store = configureStore({ reducer: rootReducer })   // OK

// -------------------------------

function App2() {
    console.group("♠♠♠♠♠♠♠ (src/App2) ♠♠♠♠♠♠♠")
    console.groupEnd()

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
                <ReduxClock1 />
            </main>
        </ReduxProvider>
    )
} // App2


export default App2;




