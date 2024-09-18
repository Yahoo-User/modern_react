import type { FC } from "react"

import { Div, Title, SubTitle } from "../components"


export
type ClockProps = {
    today: Date
}

// --------------------

// Functional Component.
const Clock: FC<ClockProps> = ({today, ...restProps}) => {
    // console.group("●●● (src/pages/Clock) ●●●")
    // console.groupEnd()

    // --------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <Div className="flex flex-col items-center justify-center h-screen text-white bg-primary App">
            <Title className="text-5xl">{ today.toLocaleTimeString() }</Title>
            <SubTitle className="mt-4 text-2xl">{ today.toLocaleDateString() }</SubTitle>
        </Div>
    )
} // Clock


export default Clock



