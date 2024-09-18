import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Title } from "../components";


// Functional Component.
let renderCount: number = 0

export default
function LoggerTest(): JSX.Element {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ LoggerTest ] Component is Mounted or Re-rendered(${++renderCount}) <=====================`);
    })

    // -----------------------
    console.group("●●● (src/pages/LoggerTest) ●●●")
    console.groupEnd()

    const dispatch = useDispatch()

    useEffect(() => {
        // { type: "hello", payload: "world" } => Temporary action to test
        dispatch({ type: "hello", payload: "world" })
    }, [dispatch])

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="font-bold text-1xl">1. LoggerTest</Title>
            <div className="mt-4"></div>
        </section>
    )
} // LoggerTest



