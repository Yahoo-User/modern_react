import { useMemo } from "react"

import { Title, Subtitle } from "../components"
import * as D from "../data"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function RadioInputTest1(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/RadioInputTest1) ●●●")

    // -----------------------

    const jobTitles1: string[] = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])

    // console.log("1. jobTitles1: %s", jobTitles1)     // 1st. method
    // jobTitles1.forEach(console.log)                  // 2nd. method

    // -----------------------

    const radioInputs1: JSX.Element[] = useMemo<JSX.Element[]>(() =>

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        jobTitles1.map<JSX.Element>((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <input
                        type="radio"
                        name="jobs1"
                        className="mr-4 radio radio-primary"

                        // If setting a "default" value into the "value" or "checked" propery,
                        // The warning displayed.
                        // To resolve this warning, Use "defaultValue" or "defaultChecked" property
                        // instead of the "value"(type="text") or "checked"(type="radio" or "checkbox") property.
                        defaultValue={value} />                     {/* Focus1 */}
                        
                    <span className="label-text">{value}</span>
                </label>
            ) // Array.map
        ), [jobTitles1])

    // console.log("2. radioInputs1:\n\n%s", radioInputs1)      // 1st. method
    // radioInputs1.forEach(console.log)                        // 2nd. method

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic">RadioInputTest1</Title>

            <div className="flex flex-col justify-center mt-4">
                <Subtitle>1. What's your job?</Subtitle>
                <Subtitle className="mt-2">2. Selected Job: </Subtitle>

                <div className="flex p-0 mt-0 justify-left">
                    <div className="flex flex-col mt-2">{radioInputs1}</div>
                </div>
            </div>
        </section>
    )
} // RadioInputTest1

