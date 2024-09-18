import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/**
 * ---------------------------------------------------------------------------
 * const render: ReactDOM.Renderer(
 *    element: React.FunctionComponentElement<any> | React.FunctionComponentElement<any>[],
 *    container: ReactDOM.Container | null, 
 *    callback?: (() => void) | undefined
 * ) => void
 * ---------------------------------------------------------------------------
 * Deprecated("render"): The return value is "deprecated".                  <--- ***
 * In future releases, the "render" function's return type will be "void".  <--- ***
 */

// In React v17

/**
 * Warning: "ReactDOM.render" is no longer supported in "React 18".        <--- ***
 * Use "createRoot" instead.                                               <--- ***
 * Until you switch to the new API, your app will behave as if it's running React 17.
 * Learn more: https://reactjs.org/link/switch-to-createroot
 */
ReactDOM.render(
  <App />,                          // 1. React Root Element
  document.querySelector("#root"),  // 2. ReactDOM Container
  () => console.log("Done.")        // 3. callback
);

// ----------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

