// ----------------------
// 1st. method - Functional Component with `function` keyword
// ----------------------
// export default
// function App() {
//   // console.clear()
//   console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
//   console.groupEnd()

//   // -----------------------
    
//   // ts(2657) - JSX expressions must have "one parent element".
//   // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
//   return <div>Hello, function-keyword component!</div>
// } // App


// ----------------------
// 2nd. method - Function Component with `arrow function`
// ----------------------

// *NOTE*: `export default` keyword cannot be attached to the `arrow` function.
const App: () => JSX.Element = () => {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div>Hello, arrow function component!</div>
} // App

export default App;




