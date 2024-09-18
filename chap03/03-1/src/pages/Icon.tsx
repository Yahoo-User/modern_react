// Functional Component.
export default function Icon() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/pages/Icon.tsx</h3>
            <hr />

            <h2>Icon</h2>

            <span className="material-symbols-outlined">home</span>
            <span className="material-symbols-outlined">check_circle_outline</span>
        </div>
    )
} // Icon

