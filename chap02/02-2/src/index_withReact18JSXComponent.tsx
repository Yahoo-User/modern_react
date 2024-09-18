import ReactDOM from "react-dom/client"


/*
  <ul>
    <li>
      <a href="http://www.google.com" target="_blank">
        <p>Go to Goole</p>
      </a>
    </li>
  </ul>
*/

// ----------------------------------------
// The Following Code Implments The Above HTML Elements Structure Using `React JSX Component`.   <--- ***
// ----------------------------------------

/**
 * Using `target="_blank"` without `rel="noreferrer"` (which implies `rel="noopener"`) is 
 * a security risk in older browsers: 
 * 
 * see https://mathiasbynens.github.io/rel-noopener/#recommendationseslintreact/jsx-no-target-blank
 * 
 * (property) React.AnchorHTMLAttributes<HTMLAnchorElement>.href?: string | undefined
 */

// ts(2657) - JSX expressions must have "one parent element".
// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.

// const rootVirtualDOM: JSX.Element = // Create a React JSX Component
const rootVirtualDOM = // Create a React JSX Component
    (
        <ul>
            <li>
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  <p>Go to Google</p>
                </a>
            </li>
        </ul>
    )


// ----------------------------------------

// const rootContainer: HTMLElement = document.querySelector<HTMLElement>("#root") as HTMLElement
const rootContainer = document.querySelector("#root") as HTMLElement

// ----------------------------------------

const root = ReactDOM.createRoot(rootContainer)

// ----------------------------------------

root.render(rootVirtualDOM)


