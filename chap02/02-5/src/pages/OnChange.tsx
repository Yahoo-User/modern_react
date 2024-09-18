import type { ChangeEvent } from "react"


// Functional Component.
export default
function OnChange() {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        e.preventDefault()

        console.log("onChangeValue:", e.target.value)
    } // onChangeValue

    // ----------------------------------

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()

        console.log("onChangeChecked:", e.target.checked)
    } // onChangedChecked

    // ----------------------------------

    const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()

        console.log("onChangeFiles:", e.target.files)
    } // onChangeFiles

    // ----------------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>OnChange</p>

            <input type="text"      onChange={ onChangeValue }  placeholder="type some text" defaultValue="Hello" /><br/>
            <input type="checkbox"  onChange={ onChangeChecked } defaultChecked /><br/>
            <input type="file"      onChange={ onChangeFiles } multiple accept="images/*" />
        </li>
    )
} // OnChange

