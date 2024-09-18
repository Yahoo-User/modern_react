import { useState, useCallback } from "react";
import { Title } from "../components"
import { Icon } from "../theme/daisyui"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function NumberState(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/NumberState) ●●●")

    // -----------------------
    
    // const setCount: (value: React.SetStateAction<S>) => void
    // The initial stateful value is used *ONCE*.   (***)
    
    const [ count, setCount ] = useState<number>(0)
    // console.log(`1. count(${count}, setCount(%s))`, setCount)
    
    // -----------------------

    // *NOT* to be in dependency trouble,
    // Invoke the "setter" with the "callback" parameter. (***)

    // 1. Whenever the "count" stateful value is continuously changed by press + button,
    //    This functional component is also continuouly re-invoked to re-render.
    
    const increment: () => void = useCallback(() => setCount(count + 1), [count])    // OK

    // 2. Only when the "count" stateful value is changed from 0 to 100,
    //    This component re-invoked *ONCE to re-rendered.       (***)
    //    But after that, No "count" stateful value is changed.
    //    Thus, this component is *NOT* re-invoked any more.    (***)
    //
    // const increment: () => void = useCallback(() => setCount(100), [])           // OK

    // console.log("2. increment: %s", increment)

    // -----------------------
    
    const decrement: () => void = useCallback(() => setCount(count => count - 1), [])
    // console.log("3. decrement: %s", decrement)
    
    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4 mb-8">
            <Title>NumberState</Title>

            <div className="flex justify-center">
                <div className="flex items-center justify-between w-1/4 mt-4">
                    <Icon name="add" className="btn-primary btn-lg" onClick={ increment } />
                    <p className="text-3xl text-bold text-primary">{count}</p>
                    <Icon name="sub" className="btn-accent btn-lg" onClick={ decrement }/>
                </div>
            </div>
        </section>
    )
} // NumberState

