/**
 * The following `import React from "react"` statement must be existed.     <--- *** : ①
 * If *NOT*, The following exception occurred:
 * 
 *  TS1208: 'index.tsx' cannot be compiled under '--isolatedModules'
 *  because it is considered a global script file.                          <--- *** : ②
 * 
 *  Add an import, export, or an "empty" 'export {}' statement 
 *  to make it a module.                                                    <--- *** : ③
 */

import React from "react"
import ReactDOM from "react-dom/client"


// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * (1) function React.createElement<P extends {}>(
 *          type        : FunctionComponent<P> | ComponentClass<P> | string,
 *          props?      : Attributes & P | null,
 *          ...children : ReactNode[]
 *     ): ReactElement<P>;
 * 
 * ---------------------------------------------------------------------------
 * (2) function ReactDOM.createRoot(
 *          container   : Element | DocumentFragment,
 *          options?    : ReactDOM.RootOptions | undefined
 *     ): ReactDOM.Root
 * ---------------------------------------------------------------------------
 * Replaces "ReactDOM.render" when the ".render" method is called and enables "Concurrent Mode".
 * @see — https://reactjs.org/docs/concurrent-mode-reference.html#createroot
 * 
 * ---------------------------------------------------------------------------
 * (3) (method) ReactDOM.Root.render(children: React.ReactNode): void
 * ---------------------------------------------------------------------------
 */

// ----------------------------------------
// Step1. Create an React element in virtual DOM which acts like a HTML DOM element.
// ----------------------------------------
// const p = React.createElement("p")

// console.log(p)
/*
    {   // p
        $$typeof : Symbol(react.element),
        "type"   : "p",
        "key"    : null,                            <--- ***
        "ref"    : null,
        "props"  : {},                              <--- ***
        "_owner" : null,
        "_self"  : null,
        "_source": null,
        "_store" : { validated: false }             <--- ***
    }
*/

// ----------------------------------------
// Step2. Attempt to append an React element into the HTML DOM tree.
// ----------------------------------------
// Argument of type 'DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>' 
// is *NOT* assignable to parameter of type 'Node'.

// document.body.appendChild(pVirtualDOM)          // XX : ***

// ----------------------------------------
// Step3. Find an element which acts like a container in HTML DOM tree.
// ----------------------------------------
// const rootDiv: HTMLElement | null = document.querySelector<HTMLElement>("#root") as HTMLElement
const rootDiv = document.querySelector("#root") as HTMLElement

// ----------------------------------------
// Step4. Create an React Root Element 
//        which acts as a container including all childs in React virtual DOM. 
// ----------------------------------------
// const root: ReactDOM.Root = ReactDOM.createRoot(rootDiv)
const root = ReactDOM.createRoot(rootDiv)

// ----------------------------------------
// Step5. Create an child React Element To Append To Root Container In React virtual DOM..
// ----------------------------------------
const pVirtualDOM = React.createElement("p", null, "Hello, World !!!")

console.log(pVirtualDOM)
/*
    {   // pVirtualDOM
        $$typeof : Symbol(react.element),
        "type"   : "p",
        "key"    : null,                                <--- ***
        "ref"    : null,
        "props"  : { "children": "Hello, World !!!" },  <--- ***
        "_owner" : null,
        "_self"  : null,
        "_source": null,
        "_store" : { validated: false }                 <--- ***
    }
*/

// ----------------------------------------
// Step6. Convert React virtual DOM Tree Into Physical HTML DOM Tree
//        And Refresh Screen At That Time Immediately.
// ----------------------------------------
root.render(pVirtualDOM)







