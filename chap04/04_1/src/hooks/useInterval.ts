import { useEffect } from "react"


export
const useInterval = (cb: () => void, duration: number = 1000) => {
    console.group("ΩΩΩ useInterval custom hook ΩΩΩ ")
    console.groupEnd()

    useEffect(() => { // setup function
        // ⓐ Invoke When the comonent attached to the DOM for the first time, or
        // ⓑ After each re-rendering due to the changes of DL,
        //    Invoke "cleanup" function -> "setup" function
        const id = setInterval(cb, duration)    // Firstly, "setup" function

        // ⓒ Invoked cleanup function when the component detached from DOM.
        return () => clearInterval(id)          // Lastly, returns "cleanup" function
    }, [cb, duration])
} // useInterval







