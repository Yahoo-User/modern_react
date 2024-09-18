import { useSelector, useDispatch } from "react-redux"

import {Title} from "../components"
import { useInterval } from "../hooks"

import type { AppState } from "../store"
import * as C from "../store/clock"


// Functional Component.
export default
function ClockTest(): JSX.Element {
	console.group("●●● (src/pages/ClockTest) ●●●")

    const clock = useSelector<AppState, C.State>(state => state.clock)
    // console.log("1. clock:", clock)

    const dispatch = useDispatch()
    // console.log("2. dispatch:", dispatch)

    /*
                                   Action Type       Action Type Object
                                 ----------------  ------------------------
        const dispatch: Dispatch<C.SetClockAction>(action: C.SetClockAction, ...extraArgs: any[]) => 
                        C.SetClockAction (***)
                        ----------------
                        Return Action Type Object
        
        --------------------
        
        dispatch: action => {
            if (isActionCreator2(action)) {
                console.warn(getMessage(action.type));
            }
            return next(action);
        }
    */

    //                               Action          Action generated
    //                                Type         with Action Generator
    //                         ----------------   ----------------------
    useInterval(() => dispatch<C.SetClockAction>( C.setClock(new Date()) ))

    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-4xl font-bold text-left">1. ClockTest</Title>
            
            <div className="flex flex-col items-center mt-4">
                <p className="text-4xl text-blue-600">{clock.toLocaleDateString()}</p>
                <p className="text-3xl text-blue-400">{clock.toLocaleTimeString()}</p>
            </div>
        </section>
    )
} // ClockTest




