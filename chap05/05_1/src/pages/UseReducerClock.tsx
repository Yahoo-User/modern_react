import {useReducer} from "react"

import type {AppState} from "../store"
import type {SetTodayAction} from "../store/actions"
import {Div, Title, Subtitle} from "../components"
import { useInterval } from "../hooks"


// Functional Component.
export default
function UseReducerClock(): JSX.Element {
    console.group("●●● (src/pages/UseReducerClock) ●●●")

    const [{today}, dispatch] = useReducer((state: AppState, action: SetTodayAction) => {
        switch (action.type) {
            case "setToday": return {...state, today: new Date()}
        } // switch

        return state
    }, { today: new Date() })

    // console.log("today:", today)
    
    useInterval(() => dispatch({type: "setToday", today: new Date()}))  // dispatch(action)

    console.groupEnd()
    
    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <Div className="flex flex-col items-center justify-center h-24 mt-8">
            <Title className="text-5xl font-bold text-center">UseReducerClock</Title>
            <Title className="mt-4 text-3xl">{today.toLocaleDateString()}</Title>
            <Subtitle className="mt-4 text-2xl">{today.toLocaleTimeString()}</Subtitle>
        </Div>
    )
} // UseReducerClock

