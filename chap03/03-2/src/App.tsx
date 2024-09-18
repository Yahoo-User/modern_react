// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

// import TextsTest from './pages/TextsTest'
import Color from './pages/Color'
// import TailwindCSS from './pages/TailwindCSS'

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

          {/* <TextsTest /> */}
          <Color />
          {/* <TailwindCSS /> */}
      </div>
    )
} // App


