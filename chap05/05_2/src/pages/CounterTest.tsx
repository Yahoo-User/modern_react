import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Title, Subtitle } from "../components"
import { Icon } from "../theme/daisyui"
import type { AppState } from "../store"
import * as C from "../store/counter"



// Functional Component.
export default
function CounterTest(): JSX.Element {
	console.group("●●● (src/pages/CounterTest) ●●●")

    const dispatch  = useDispatch()
    const counter   = useSelector<AppState, C.State>( ({counter}) => counter )
    const increase  = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
    const decrease  = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

    // console.log("1. dispatch:", dispatch)
    // console.log("2. counter:",  counter)
    // console.log("3. increase:", increase)
    // console.log("4. decrease:", decrease)

    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl font-bold text-left">2. CounterTest</Title>

            <div className="flex justify-center p-4 mt-4">
                <div className="flex items-center justify-around w-1/3 font-bold text-blue-500">
                    <Icon name="Add" onClick={increase} className="text-lg" />
                    <Subtitle className="text-xl font-bold text-emerald-500">{counter}</Subtitle>
                    <Icon name="Sub" onClick={decrease} className="text-lg" />
                </div>
            </div>
        </section>
    )
} // CounterTest



