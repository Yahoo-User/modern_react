import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppState } from "../store";
import { Title } from "../components";
import { Button } from "../theme/daisyui"
import * as D from "../data"
import * as E from "../store/errorMessage"


// Functional Component.
let renderCount: number = 0

export default
function ErrorMessageTest(): JSX.Element {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ ErrorMessageTest ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/pages/ErrorMessageTest) ●●●")
    console.groupEnd()

    const dispatch = useDispatch()

    const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)
    // console.log("1. errorMessage.length:", errorMessage.length)

    const generateErrorMessage = useCallback(() => {

        // TypeVariable '<UnknownAction>' must be '<any>'.
        // Otherwise, the following error occurred:
        //      error ts(2345) - Argument of type '(dispatch: Dispatch) => void' is not assignable
        //                       to parameter of type 'UnknownAction'.
        dispatch<any>(E.generateErrorMessage(D.randomSentence()))

    }, [dispatch])

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl font-bold text-center">3. ErrorMessageTest</Title>

            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button className="text-base text-white btn btn-sm btn-primary" onClick={generateErrorMessage}>
                        generate error message
                    </Button>
                </div>

                {errorMessage.length > 0 && (
                    <div className="flex items-center justify-center mt-4 bg-red-500">
                        <p className="text-lg italic font-bold text-white">error: {errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
} // ErrorMessageTest


