import ReactDOM from "react-dom/client"

import * as D from "./data"


// ----------------------------------------

const children = [0, 1, 2].map((n: number) => <h3>Hello, World! - {n}</h3>)   // OK

// const children =                                                              // OK
//   D.makeArray(10, "").map(
//     (_, index) =>

//     // returns JSX.Component
//     (
//       <div key={index}>
//         <p>{D.randomId()}</p>
//         <p>{D.randomName()}</p>
//         <p>{D.randomJobTitle()}</p>
//         <p>{D.randomSentence()}</p>

//         <img src={D.randomAvatar()} alt="avatar" width={100} height={100} />
//       </div>
//     )
//   )  // .map

// ----------------------------------------

/**
 * Warning: Each `child` in a `list` should have a unique "key" prop.     <--- ***
 * Check the top-level render call using <ul>.
 * 
 * See https://reactjs.org/link/warning-keys for more information. at li
 */

const rootVirtualDOM = <div>{children}</div>

// ----------------------------------------

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

// ----------------------------------------

root.render(rootVirtualDOM)





