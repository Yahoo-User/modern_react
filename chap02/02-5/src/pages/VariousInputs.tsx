// Functional Component.
export default
function VariousInputs() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <li>
            <p>VariousInputs</p>

            <form>
                <input type="text" placeholder="enter some texts" /><br />
                <input type="password" placeholder="enter your password" /><br />
                <input type="email" placeholder="enter email address" /><br />
                <input type="range" /><br />
                <input type="button" value="I'm a button" /><br />
                <input type="checkbox" value="I'm a checkbox" defaultChecked /><br />
                <input type="radio" value="I'm a radio" defaultChecked /><br />
                <input type="file" />
            </form>
        </li>
    )
} // VariousInputs

