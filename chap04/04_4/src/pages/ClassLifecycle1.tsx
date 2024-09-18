import React, {} from "react"


// Class Component.

export default  // OK
class ClassLifecycle1 extends React.Component {
    
    render(): JSX.Element {
        const today: Date = new Date();

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return (
            <section className="mt-4">
                <p className="text-3xl text-center">ClassLifecycle1</p>

                <div className="flex flex-col items-center mt-4">
                    <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
                    <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
                </div>
            </section>
        )
    }
    
} // end class

// error ts(6385) - 'ClassLifecycle1' is "deprecated".
// export default ClassLifecycle1;                       // XX, <--- ***


