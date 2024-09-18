import { useMemo, useCallback, useState } from "react"
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
function HigherOrderRadioInputTest(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/HigherOrderRadioInputTest) ●●●")

    const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
    
    // console.log("1. jobTitle3:", jobTitles3)

    // -----------------------
    
    const [ selectedIndex, setSelectedIndex ] = useState<number>(0)
    
    // console.log("2. selectedIndex(%d), setSelectedIndex(%s)", selectedIndex, setSelectedIndex)

    // -----------------------
    
    // callback is a high-order function (2-order)
    const onChange3 = useCallback((index: number) => () => setSelectedIndex(notUsed => index), [])
    
    // console.log("3. onChange3:", onChange3)

    // -----------------------

    const radioInputs3: JSX.Element[] = useMemo<JSX.Element[]>(() => 
        jobTitles3.map((value, index) => (
            <label key={index} className="flex justify-start cursor-pointer label">
                <input
                    type="radio"
                    name="jobs3"
                    className="mr-4 radio radio-primary"
                    checked={index === selectedIndex}
                    onChange={onChange3(index)}/>
                    
                <span className="label-text">{value}</span>
            </label>
        )), [jobTitles3, selectedIndex, onChange3]) // useMemo

    // console.log("4. radioInputs3:", radioInputs3)

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic">HigherOrderRadioInputTest</Title>

            <div className="flex flex-col justify-center mt-4">
                <Subtitle>1. What's your job?</Subtitle>
                <Subtitle className="mt-2">2. Selected Job: {jobTitles3[selectedIndex]}</Subtitle>
                
                <div className="flex p-0 mt-0 justify-left">
                    <div className="flex flex-col mt-2">{radioInputs3}</div>
                </div>
            </div>
        </section>
    )
} // HigherOrderRadioInputTest

