import { ChangeEvent, useState } from "react";
import { Title, Input } from "../components"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function InputTestStep1(): JSX.Element {
    // console.clear();
    console.group("●●● (src/pages/InputTestStep1) ●●●")

    const [value, setValue] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    // console.log(`value(${value}), checked(${checked})`)
    
    console.groupEnd()

    // -----------------------

    // The `setter` invocation causes to re-render this component. (***)
    const onChangeText      = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value) 
    const onChangeCheckbox  = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title>InputTestStep1</Title>

            <div className="flex items-center justify-center p-4 mt-4">
                {/* 1. text: <input type="text" defaultValue={value} onChange={onChangeText} /> */}
                1. text: <Input type="text" name="1" value={value} onChange={onChangeText} />
                
                {/* 2. checkbox : <input type="checkbox" defaultChecked={checked} onChange={onChangeCheckbox} /> */}
                2. checkbox : <Input type="checkbox" name="2" checked={checked} onChange={onChangeCheckbox} />
            </div>
        </section>
    )
} // InputTestStep1



