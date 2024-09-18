import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * (1) function createRoot(container: Element | DocumentFragment, options?: ReactDOM.RootOptions | undefined): ReactDOM.Root
 * ---------------------------------------------------------------------------
 * Replaces "ReactDOM.render" when the ".render" method is called and enables "Concurrent Mode".
 * @see — https://reactjs.org/docs/concurrent-mode-reference.html#createroot 
 * 
 * ---------------------------------------------------------------------------
 * (2) (method) Document.getElementById(elementId: string): HTMLElement | null
 * ---------------------------------------------------------------------------
 * Returns a reference to the "first" object with the "specified" value of the "ID" attribute.
 * @param elementId - String that specifies the ID value.
 * 
 * ---------------------------------------------------------------------------
 * (3) (method) Root.render(children: React.ReactNode): void
 * ---------------------------------------------------------------------------
 */

// -----------------
// 1st. method
// -----------------

// In React v18
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  // "as": Type Casting == Type Assertion
);

// ----------------------------------------

// (1) <App /> is called, "React Component"
// (2) <React.StrictMode/>  : Also, "React Component". 
//                            Checking codes, shows the error if there are errors.

// In React v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// -----------------
// 2nd. method
// -----------------

// In React v18

// (1) <App /> is called, "React Component"
// (2) <React.StrictMode/>  : Also, "React Component". 
//                            Checking codes, shows the error if there are errors.
// ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement  // "as": Type Casting == Type Assertion
// ).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ----------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
reportWebVitals(console.log)


