// export {}
import { useMemo } from "react"
import { configureStore } from "@reduxjs/toolkit"

import {
	// rootReducer1st,
	rootReducer2nd
} from "./rootReducer2"

// import { rootReducer1 } from "./rootReducer1"


const initializeStore = () => {
	// ① "RTK" (@reduxjs/toolkit) package provides the "configureStore" function
	//    which manages "new state" that the "Reducer" function returns as an object, called "Store".	 (***)
	// ② The "configureStore()" function provided by "RTK" returns the "Redux store". 					(***)

	const store = configureStore({ reducer: rootReducer2nd })
	// const store = configureStore({ reducer: rootReducer1st })
	// ------------------------------
	// const store = configureStore({ reducer: rootReducer1 })

	// { dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ }
	// console.log("store:", store)

	return store
} // initializeStore

// --------------------------

export
function useStore() {	// User-defined custom hook.
	console.group("ΩΩΩ useStore custom hook ΩΩΩ ")
	console.groupEnd()

	// --------------------------
	// The "useMemo" React hook will *ONLY* recompute the "memoized" value
	// when one of the "deps" has changed
	return useMemo(() => initializeStore(), [])
} // useStore




