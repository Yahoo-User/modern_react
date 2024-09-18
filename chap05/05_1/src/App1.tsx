// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
// import {Provider as ReduxProvider} from "react-redux"
import './App.css';

import UseReducerClock from './pages/UseReducerClock';
import ReduxClock1 from './pages/ReduxClock1';


function App1() {
    console.group("♠♠♠♠♠♠♠ (src/App1) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        // error ts(2741) - Property 'store' is missing in type '{ children: Element; }'    <--- ***
        // but required in type 'ProviderProps<UnknownAction, unknown>'.
        
        // <ReduxProvider>
          <main className='p-8'>
              <h3 className='text-xl font-bold text-red-500'>src/App.tsx</h3>
              <hr /><br />
              
              <UseReducerClock />
              <ReduxClock1 />
          </main>
        // </ReduxProvider>
    )
} // App1


export default App1;



