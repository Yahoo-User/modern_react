// export {}

import { useEffect } from "react";


export
const useEventListener = (
	target: EventTarget | null,
	type: string,

	/**
	 * 1. type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
	 * 2. interface EventListener 		{ (evt: Event): void; }
	 * 3. interface EventListenerObject { handleEvent(object: Event): void; }
	 */
	cb: EventListenerOrEventListenerObject | null
) => {
	console.group("ΩΩΩ useEventListener custom hook ΩΩΩ ");
	console.groupEnd()
	
	// console.log(`▶ target:`, target, `, type: ${type}, cb: ${cb}`)

	useEffect(() => {
		if(target && cb) {
			target.addEventListener(type, cb)					// ①
			return () => target.removeEventListener(type, cb)	// ②
		}
	}, [target, type, cb])										// ③
} // useEventListener


