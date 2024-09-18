import { ChangeEvent, useCallback, useState } from "react";
import { Title, Input } from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function InputTestStep2(): JSX.Element {
    // console.clear();
    console.group("●●● (src/pages/InputTestStep2) ●●●")

    const [value, setValue] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    // console.log(`+ value(${value}), checked(${checked})`)

    console.groupEnd()

    // -----------------------

    const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value), [])
    const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked), [])

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title>InputTestStep2</Title>

            <div className="flex items-center justify-center p-4 mt-4">
                <Input 
                    type="text"
                    name="3"
                    value={value}
                    onChange={onChangeValue}
                    className="input-primary input-sm"/>
                    
                <Input 
                    type="checkbox"
                    name="4"
                    checked={checked}
                    onChange={onChangeChecked}
                    className="ml-4 checkbox checkbox-primary input-sm" />
            </div>
        </section>
    )
} // InputTestStep2



