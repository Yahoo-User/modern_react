// Functional Component.
export default function Style() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/pages/Style.tsx</h3>
            <hr />

            <h3>Style</h3>

            {/* In React, The value of 'style' property must be an `object`, *NOT* string. */}
            <span
                className="material-symbols-outlined"
                style={{ color: 'blue'}}>
                    home
            </span>

            {/* In React, The value of 'style' property must be an `object`, *NOT* string. */}
            <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', color: 'red' }}>
                    check_circle_outline
            </span>
        </div>
    )
} // Style

