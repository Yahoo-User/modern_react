import React, {} from "react"


// Class Component.

export default  // OK
class ClassLifecycle2 extends React.Component {

    state = {
        today: new Date(),
        
        // intervalId: NodeJS.Timer                 // XX, error ts(2708) - Cannot use namespace 'NodeJS' as a value.
        intervalId: null as unknown as NodeJS.Timer // OK, TypeScript requests like this
    }

    // -----------------------

    componentDidMount(): void {
        const duration = 1000
        const intervalId = setInterval(         // ①
            () => this.setState({ today: new Date() }),   // ②
            duration
        )

        this.setState({ intervalId })           // ③
    }

    // -----------------------

    componentWillUnmount(): void {
        clearInterval(this.state.intervalId)    // ⑤
    }

    // -----------------------

    render(): JSX.Element {
        const { today } = this.state            // ④

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return (
            <section className="mt-4">
                <p className="text-3xl text-center">ClassLifecycle2</p>

                <div className="flex flex-col items-center mt-4">
                    <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
                    <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
                </div>
            </section>
        )
    }

} // end class

// error ts(6385) - 'ClassLifecycle2' is "deprecated".
// export default ClassLifecycle2;                       // XX, <--- ***


