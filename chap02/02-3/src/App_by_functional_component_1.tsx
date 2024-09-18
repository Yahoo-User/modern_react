import { JSX } from 'react';


// JSX.Element extends React.ReactElement<any, any>   <--- ***
// type ReactNode =
//        | ReactElement                              <--- ***
//        ...
function App(): JSX.Element {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // -----------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ul>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noreferrer">
              <p>Go to Google</p>
            </a>
          </li>
        </ul>
    )
} // app

export default App;
