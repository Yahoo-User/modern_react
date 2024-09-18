/**
 * The following `import React from "react"` statement must be existed.       <--- *** : ①
 * If *NOT*, The following exception occurred:
 * 
 *  TS1208: 'index.tsx' cannot be compiled under '--isolatedModules'
 *  because it is considered a global script file.                          <--- *** : ②
 * 
 *  Add an import, export, or an "empty" 'export {}' statement 
 *  to make it a module.                                                    <--- *** : ③
 */

// import React from "react"                               // ③ : Added to make this module


// ----------------------------------------

export { }                                           // ③ : Added to make this module

// ----------------------------------------

// In Non-React, Only Use HTML Physical DOM.

const pPhysicalDOM = document.createElement("p")    // Create a new <p/> tag
pPhysicalDOM.innerText = "Hello, World"

console.log("pPhysicalDOM:", pPhysicalDOM, ", type:", pPhysicalDOM.constructor.prototype)

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * ( method) ParentNode.querySelector<T>(selectors: string): T | null
 * ---------------------------------------------------------------------------
 * Returns the "first" element that is a descendant of node that matches selectors.
 */
// const divRoot: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#root")
const divRoot = document.querySelector("#root")

// ----------------------------------------

// Append <p/> tag into <div id="root"/> tag
// if (divRoot) divRoot.appendChild<HTMLParagraphElement>(pPhysicalDOM)
divRoot?.appendChild(pPhysicalDOM)

