// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

import {useEffect, useState} from "react"

import "@kfonts/d2coding"
import "./App.css"



export default
function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()
    
    // ----------------------------------------------------
    // The test of three-features of React Hook
    // ----------------------------------------------------
    // ① React Hook function could invoke the same React Hook many times.
    // ② React Hook could * NOT * be invoked in the brace({}) of a complex sentence in it,
    //    * NOT * in function body's brace({}).
    // ③ Asynchronous function could * NOT * be used as a callback of React hook.
    // ----------------------------------------------------
    
    const [x, setX] = useState(0)                   // ① : OK
    const [y, setY] = useState(0)                   // ① : OK

    useEffect(() => {}, [])                         // ① : OK
    useEffect(() => {}, [])                         // ① : OK
    
    // ------------------------------------

    // {   // local-scoped block

        // Do *NOT* use React Hook in the brace({}) of a complex sentence.
        // const [z, setZ] = useState<number>(0)       // ② : XX
        // console.log("\t+ z1:", z)
        
        // Uncaught TypeError: Assignment to constant variable.
        // setZ(++z)

        // Too many re-renders.
        // React limits the number of renders to prevent an infinite loop
        // setZ(z+1)        // infinite loop
    // }

    // error ts(2304) - Cannot find name 'z'.
    // console.log("\t+ z2:", z)    
    
    // ------------------------------------

    // if(true) {
        
        // React Hook "useState" is called conditionally.
        // React Hooks must be called in the exact same order in every component render.
        // const [k, setK] = useState<number>(1)    // ② : XX
        
    // } // if

    // ------------------------------------

    /*
        Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

        useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await MyAPI.getData(someId);
            // ...
        }
        fetchData();
        }, [someId]); // Or [] if effect doesn't need props or state
    */
    // useEffect(async () => await Promise.resolve(1)) // ③ : XX
    
    // ------------------------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="App">
            <h3 className="text-4xl">src/App.tsx</h3>
            <hr />
            
        </div>
    )
} // App

