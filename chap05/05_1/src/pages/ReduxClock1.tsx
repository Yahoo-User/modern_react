import type { FC } from "react"
import { useSelector } from "react-redux"                               // <--- ***

import { Div, Title, Subtitle } from "../components"
import type { AppState } from "../store"                                // <--- ***


export
type ClockProps = {
    // Instead, get "today" property value
    // from "Redux Store" with "useSelector" React hook.
    
    // today: Date              // Eliminated.
}

// --------------------

// Functional Component.
const ReduxClock1: FC<ClockProps> = () => {
    console.group("●●● (src/pages/ReduxClock1) ●●●")

    const today = useSelector<AppState, Date>(state => state.today)     // <--- ***
    // console.log("today:", today)

    console.groupEnd()

    // --------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <Div className="flex flex-col items-center justify-center text-white h-fit p-7 bg-primary App">
            <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
            <Subtitle className="mt-4 text-3xl">{today.toLocaleDateString()}</Subtitle>
        </Div>
    )
} // ReduxClock1

export default ReduxClock1




