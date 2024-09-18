import ReactDOM from "react-dom/client"


// ts(2657) - JSX expressions must have "one parent element".
// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.

const children = [
    <li>
      <a href="http://www.google.com" target="_blank" rel="noreferrer">
        <p>1. Go to Google</p>
      </a>
    </li>,

    <li>
      <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
        <p>2. Go to Facebook</p>
      </a>
    </li>,

    <li>
      <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
        <p>3. Go to Twitter</p>
      </a>
    </li>
]

// ----------------------

/**
 * Warning: Each `child` in a `list` should have a unique "key" prop.     <--- ***
 * Check the top-level render call using <ul>.
 * 
 * See https://reactjs.org/link/warning-keys for more information. at li
 */

// ts(2657) - JSX expressions must have "one parent element".
// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
const rootVirtualDOM = <ul>{children}</ul>

// ----------------------

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement)

// ----------------------

root.render(rootVirtualDOM)


