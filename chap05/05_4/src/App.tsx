// This import statement is required for the following React functional component,
// Regardless of use of "React" imported module. (***)
// import React from 'react';
import './App.css';

import { useEffect } from 'react';
import { Provider as ReduxProvider } from "react-redux"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useStore } from "./store"

// import ListCard from "./pages/ListCard"
// import BoardList from "./pages/BoardList"
import Board from "./pages/Board"


// Functional Component.
let renderCount: number = 0

function App(): JSX.Element {
  /*
      In this variant of "useEffect", the following message will be printed
      when the component is "mounted" and every time the component "state" or "props" is updated.
      
      If you want to see logs only when the component re-renders,
      the simplest way is to make a "useEffect" hook *Without* a "dependency array",
      this will make it run after each component render.
  */
  useEffect(() => {
    console.log(`☞ [ App ] Component is Mounted or Re-rendered(${++renderCount}) <=====================`);
  })

  // -----------------------
  console.group(`♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠`)
  console.groupEnd()

  // A Redux store returned by "configureStore()" function provided by "RTK".	(***)
  const store = useStore()

  // -----------------------

  // ts(2657) - JSX expressions must have "one parent element".
  // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
  return (
    <ReduxProvider store={store}>
        <DndProvider backend={HTML5Backend}>
            <h3 className='text-xl font-bold text-red-500'>src/App.tsx</h3>
            <hr /><br />

            {/* <ListCard /> */}
            {/* <BoardList /> */}
            <Board />
      </DndProvider>
    </ReduxProvider>
  );
} // App


export default App;




