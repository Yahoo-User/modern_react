// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

// import { DivTest } from "./components";
import "./App.css"
import "@kfonts/d2coding"


export default
function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
  
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/App.tsx</h3>
            <hr /><br />

            {/* 
                <DivTest
                    name="Yoseph"
                    age={23}
                    id="_id"
                    className="text-xl text-white bg-sky-400"
                    style={ { fontFamily: 'D2Coding' }}>
                    <div>
                      <p>Hello, World!!!</p>
                    </div>
                </DivTest>
            */}
        </div>
  )
} // App

