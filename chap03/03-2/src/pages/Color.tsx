// Functional Component.
export default function Color() {

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="p-4 bg-sky-500">
            <h3>src/pages/Color.tsx</h3>
            <hr /><br />

            <p className="w-full p-4 text-3xl text-white">Color</p>
            <div className="mb-4">
                <p className="text-white">Email Address</p>
                <input type="email" className="text-gray-900 border-4 border-sky-200" />
                <p className="text-rose-500">This field is required</p>
            </div>
        </div>
    )
} // Color

