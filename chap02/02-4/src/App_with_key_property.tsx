import type { JSX } from "react"


export default
function App(): JSX.Element {
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/App) ♠♠♠♠♠♠♠")
    console.groupEnd()

    // ----------------------------
    // (1) `key` property
    // ----------------------------

    // 1. Warning : Each child in a list should have a unique "key" prop.   <--- ***
    // 2. Solution: Set a `unique id` to the `key` property of an each element in the list (or Array)
    //              to prevent *Duplication*.                               <--- ***

    // const texts = [ <p>Hello</p>, <p>World!!!</p> ]                  // 1. Warning

    // (property) React.Attributes.key?: React.Key | null | undefined      // key? -> *Optional*
    // The type of `React.key`is the following:
    //    type Key = ① string | ② number | ③ bigint;

    // 2-1. Solution #1 with string type value
    // const texts = [ <p key="1">Hello</p>, <p key="2">World!!!</p> ]

    // 2-2. Solution #2 with number type value
    // const texts = [
    //   <p key={1}>Hello</p>,
    //   <p key={2}>World!!!</p>
    // ]

    // 2-3. Solution #2 using "Array.map" method
    const texts = 
        [ "Hello", "World!!!" ].map( 
          // (value: string, index: number) => <p key={index}>{value}</p>
          (value, index) => <p key={index}>{value}</p>
    )

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div>{texts}</div>
} // App
