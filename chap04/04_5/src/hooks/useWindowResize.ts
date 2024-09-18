import {useState, useEffect} from "react"

import { useEventListener } from "./useEventListener"


export
const useWindowResize: () => number[] = () => {
	console.group("ΩΩΩ useWindowResize custom hook ΩΩΩ ");

	// The stateful data (state):
	//	   innerWidthHeight: number[] = [ window.innerWidth, window.innerHeight ]
	const [innerWidthHeight, setWidthHeight] = useState<number[]>([0, 0])
	// console.log("▶ innerWidthHeight:", innerWidthHeight)

	// -----------------------
	// React Hook :
	useEffect(() => {
		// Only when the component will be mounted, set initial window size to the "state".	(***)
		setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
	}, []) // useEffect

	// -----------------------
	// Custom Hook :
	// useEventListener(target: EventTarget | null, type: string, cb: EventListenerOrEventListenerObject | null): void

	useEventListener(window, "resize", () => {
		// Whenever "window" size changed, update state by the detected window size .		(***)
		setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
	})	// useEventListener

	console.groupEnd()

	// -----------------------

	// Returns stateful data, current inner size of the window:
	// number[] =  [window.innerWidth, window.innerHeight]
	return innerWidthHeight
} // useWindowResize

