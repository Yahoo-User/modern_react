import { useCallback, useMemo, useState } from "react"
import type { ChangeEvent } from "react"

import { Title, Subtitle, Div } from "../components"
import * as D from "../data"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function RadioInputTest2(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/RadioInputTest2) ●●●")

    // -----------------------

    const jobTitles2: string[] = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])

    // console.log("1. jobTitles2: %s", jobTitles2)         // 1st. method
    // jobTitles2.forEach(console.log)                      // 2nd. method

    // -----------------------

    // initialValue = jobTitles2[0]  (***)
    const [selectedJobTitle, setSelectedJobTitle] = useState<string>(jobTitles2[1])
    // console.log("2. selectedJobTitle(%s), setSelectedJobTitle(%s)", selectedJobTitle, setSelectedJobTitle)

    // -----------------------
    
    const onChange2: (e: ChangeEvent<HTMLInputElement>) => void =        // <--- ***
        // To cache a "memoized" version of the "callback"
        useCallback((e: ChangeEvent<HTMLInputElement>) => 
            // setSelectedJobTitle(notUsed => e.target.value)      // 1st. method - OK
            // setSelectedJobTitle(_ => e.target.value)            // 2nd. method - OK
            setSelectedJobTitle(e.target.value)                 // 3rd. method - OK
        , [])  // onChange

    // -----------------------
    
    const radioInputs2: JSX.Element[] = useMemo<JSX.Element[]>(() => 

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        jobTitles2.map<JSX.Element>((value, index) => 
            <label key={index} className="flex justify-start cursor-pointer label">
                <input
                    type="radio"
                    name="jobs2"
                    className="mr-4 radio radio-primary"
                    
                    checked={ value === selectedJobTitle }              /* Focus1 */
                    onChange={ onChange2 }                              /* Focus3 */

                    // If setting a "default" value into the "value" or "checked" propery,
                    // The warning displayed.
                    // To resolve this warning, Use "defaultValue" or "defaultChecked" property
                    // instead of the "value"(type="text") or "checked"(type="radio" or "checkbox") property.
                    defaultValue={ value }                              /* Focus2 */
                />
                    
                <span className="label-text">{value}</span>
            </label>
        ), [jobTitles2, selectedJobTitle, onChange2]) // useMemo

    // console.log("3. radioInputs2:\n\n%s", radioInputs2)      // 1st. method
    // radioInputs2.forEach(console.log)                        // 2nd. method

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic">RadioInputTest2</Title>

            <div className="flex flex-col justify-center mt-4">
                <Subtitle>1. What's your job?</Subtitle>
                <Subtitle className="mt-2">2. Selected Job: {selectedJobTitle}</Subtitle>

                <div className="flex p-0 mt-0 justify-left">
                    <div className="flex flex-col mt-2">{radioInputs2}</div>
                </div>
            </div>
        </section>
    )
} // RadioInputTest2

