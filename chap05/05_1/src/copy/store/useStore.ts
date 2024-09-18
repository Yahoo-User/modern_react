// export {}
import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";


const initializeStore = () => {
	// { dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ }
	const store = configureStore({ reducer: rootReducer })
	return store
} // initializeStore

// ----------------

export
function useStore() {
	/*
		The "useMemo" React hook will *ONLY* recompute the "memoized" value
		when one of the "deps" has changed
	*/
	return useMemo(() => initializeStore(), [])
} // useStore



