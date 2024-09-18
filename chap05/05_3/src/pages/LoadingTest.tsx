import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import type { AppState } from "../store"
import { Title } from "../components"
import { Button } from "../theme/daisyui"
import * as L from "../store/loading"


// Functional Component.
let renderCount: number = 0

export default
function LoadingTest(): JSX.Element {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ LoadingTest ] Component is Mounted or Re-rendered(${++renderCount}) <=====================`);
    })

    // -----------------------
    console.group("●●● (src/pages/LoadingTest) ●●●")
    console.groupEnd()

    const dispatch = useDispatch()
    const loading = useSelector<AppState, L.State>(({loading}) => loading)

    const doTimedLoading = useCallback(() => {
        
        // TypeVariable '<UnknownAction>' must be '<any>'.
        // Otherwise, the following error occurred:
        //      error ts(2345) - Argument of type '(dispatch: Dispatch) => void' is not assignable
        //                       to parameter of type 'UnknownAction'.
        dispatch<any>(L.doTimedLoading(1000))   // To send "thunk action" to the "redux store".     <--- ***
        
    }, [dispatch])
    

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl font-bold text-center">2. LoadingTest</Title>
            
            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button
                        className="text-base text-white btn-sm btn-primary"
                        onClick={doTimedLoading}
                        disabled={loading}>Timed Loading</Button>
                </div>
            </div>

            {loading && (
                <div className="flex items-center justify-center">
                    <button className="text-green-500 btn btn-circle loading"></button>
                </div>  
            )}
        </section>
    )
} // LoadingTest



