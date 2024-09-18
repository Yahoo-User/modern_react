import {useSelector, useDispatch} from "react-redux"

import type { AppState } from "../store"
import {Div, Title, Subtitle} from "../components"
import {useInterval} from "../hooks"


// Functional Component
export default
function ReduxClock() {
    console.group("●●● (src/pages/ReduxClock) ●●●")

    const today = useSelector<AppState, Date>(state => state.today)
    // console.log("1. today:", today)

    const dispatch = useDispatch()                          // <--- ***
    // console.log("2. dispatch: %s", dispatch)

    useInterval(() => { // The "cb: () => void" of "setInterval" JavaScript built-in function
        dispatch({type: "setToday", today: new Date()})     // <--- ***
    }, 1000)

    console.groupEnd()

    // ------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <Div className="flex flex-col items-center justify-center mt-16">
            <Title className="text-5xl font-bold text-center">ReduxClock2</Title>
            <Title className="mt-4 text-3xl">{today.toLocaleDateString()}</Title>
            
            <Subtitle className="mt-4 text-2xl">{today.toLocaleTimeString()}</Subtitle>
        </Div>
    )
} // ReduxClock

