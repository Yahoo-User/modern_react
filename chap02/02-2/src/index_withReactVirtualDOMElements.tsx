import React from "react"
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

// The Following Code Implments The Above HTML Elements Structure Using "React.createElement" Method.   <--- ***
const CE: Function = React.createElement  // 1st-class function

// --------------------------
// 1st. method : Using Array
// --------------------------
// Create React Virual DOM Elements With React.CreateElement Function :

/*
const rootVirtualDOM = CE("ul", null, [
  CE("li", null, [
    CE("a", { href: "http://www.google.com", target: "_blank" }, [
      CE("p", null, "Go to Goole")
    ])
  ])
])
 */

// --------------------------
// 2nd. method : Using Rest Operator As It Is.
// --------------------------
// Create React Virual DOM Elements With React.CreateElement Function :

const rootVirtualDOM = CE("ul", null,
  CE("li", null,
    CE("a", { href: "http://www.google.com", target: "_blank" },
      CE("p", null, "Go to Google")
    )
  )
)

// ----------------------------------------

// const rootContainer: HTMLElement = document.querySelector<HTMLElement>("#root") as HTMLElement
const rootContainer = document.querySelector("#root") as HTMLElement

// ----------------------------------------

const root = ReactDOM.createRoot(rootContainer)

// ----------------------------------------

root.render(rootVirtualDOM)


