// Functional Component
export default
function Temp(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/Temp) ●●●")
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            {/* If setting a "default value" into "value" or "checked" propery,
            The warning displayed in web brower's console */}

            <input type="text" value="Yoseph" />
            <input type="checkbox" checked={true} />
        </div>
    )
} // Temp
