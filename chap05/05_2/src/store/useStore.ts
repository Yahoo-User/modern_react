// export {}
import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { rootReducer } from "./rootReducer";


/*
	① "RTK" (@reduxjs/toolkit) package provides the "configureStore" function
		which manages "new state" that the "Reducer" function returns as an object,
		called "Store".																	<--- ***

	② The "configureStore()" function provided by "RTK" returns the "Redux store".	   <--- ***
*/
const initializeStore = () => {
	const store = configureStore({ reducer: rootReducer })

	// { dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ }
	// console.log("store:", store)

	return store
} // initializeStore

// -----------------------

export
function useStore() {	// User-defined custom hook.
	console.group("ΩΩΩ useClock custom hook ΩΩΩ ")
	console.groupEnd()

	// -----------------------

	// The "useMemo" React hook will *ONLY* recompute the "memoized" value
	// when one of the "deps" has changed
	return useMemo(() => initializeStore(), [])
} // useStore



