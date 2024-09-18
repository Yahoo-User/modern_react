import { useState } from "react";

import { useInterval } from "./useInterval";


export
const useClock = () => {
    console.group("ΩΩΩ useClock custom hook ΩΩΩ ")
    console.groupEnd()

    const [ today, setToday ] = useState<Date>(new Date())
    useInterval(() => setToday(new Date()))

    return today
} // useClock


