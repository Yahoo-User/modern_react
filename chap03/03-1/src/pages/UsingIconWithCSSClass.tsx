import { Icon1 } from "../components"


// Functional Component.
export default
function UsingIconWithCSSClass() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/pages/UsingIconWithCSSClass.tsx</h3>
            <hr />
            
            <Icon1 name="home" style={ { fontSize: '50px' }} />
        </div>
    )
} // UsingIconWithCSSClass

