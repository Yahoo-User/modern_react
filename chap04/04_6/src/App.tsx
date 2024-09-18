// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import './App.css';
import ResponsiveContextTest from './pages/ResponsiveContextTest';

import { ResponsiveProvider2 } from './contexts';
// import { ResponsiveProvider1 } from './contexts';


// Functional Component
function App() {
    // console.clear()
    console.group("●●● (src/App) ●●●")
    console.groupEnd()

    // ----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        // Pitfall: All context provider must declare at the top level of a component.
        <ResponsiveProvider2>
        {/* <ResponsiveProvider1> */}
        
            <main className='mt-2 ml-4'>
                <h3 className="text-lg text-red-600">src/App.tsx</h3>
                <hr /><br />
                
                <ResponsiveContextTest />
            </main>
            
        {/* </ResponsiveProvider1> */}
        </ResponsiveProvider2>
    );
}

export default App;

