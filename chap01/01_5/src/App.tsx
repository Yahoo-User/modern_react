// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)
import React from "react"

import * as D from "./data"


// Assign arrow function to a variable before exporting as module default.
export default
function App(): JSX.Element {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // ----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <p>{D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}</p>

            {/* 
              "img" elements must have an "alt" prop,
              either with meaningful text, or an empty string for decorative images. (***)
            */}
            <img src={D.randomAvatar()} alt="" width={300} />
            <img src={D.randomImage()} alt="" width={300} />
            <p />

            <p>Now: {D.makeDateWithFormat(new Date())}</p>
        </div>
    )
} // App



