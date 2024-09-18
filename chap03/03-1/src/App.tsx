// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

// import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Style from "./pages/Style";
import UsingIcon from "./pages/UsingIcon";
import UsingIconWithCSSClass  from "./pages/UsingIconWithCSSClass";

import './App.css'


// Functional Component
export default
function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
      <div>
          <h3>src/App.tsx</h3>
          <hr />

          <UsingIconWithCSSClass />
          <UsingIcon />
          <Style />
          <Icon />
          {/* <Bootstrap /> */}
      </div>
    )
} // App


