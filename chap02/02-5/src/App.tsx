// This import statement is required for the following React functional component,
// Regardless of using "React" imported module. (***)

// import EventListener    from "./pages/EventListener"
// import OnClick          from "./pages/OnClick"
// import ReactOnClick     from "./pages/ReactOnClick"
// import DispatchEvent    from "./pages/DispatchEvent"
// import EventBubbling    from "./pages/EventBubbling"
// import StopPropagation from "./pages/StopPropagation"
// import VariousInputs    from "./pages/VariousInputs"
// import OnChange from "./pages/OnChange"
// import FileInput        from "./pages/FileInput"
// import DragDrop         from "./pages/DragDrop"
import FileDrop         from "./pages/FileDrop"


// Functional Component
export default
function App() {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
      <ol>
          <FileDrop />
          {/* <DragDrop /> */}
          {/* <FileInput /> */}
          {/* <OnChange /> */}
          {/* <VariousInputs /> */}
          {/* <StopPropagation /> */}
          {/* <EventBubbling /> */}
          {/* <DispatchEvent /> */}
          {/* <ReactOnClick /> */}
          {/* <OnClick /> */}
          {/* <EventListener /> */}
      </ol>
    )
} // App

// ----------------------------------

// const rootDiv = document.querySelector("#root") as HTMLElement  // OK
// const rootDiv = document.querySelector<HTMLElement>("#root")    // OK

// if(rootDiv) {
//   rootDiv.onclick = e => console.log("In <rootDiv>:", e)
// }

// ----------------------------------



