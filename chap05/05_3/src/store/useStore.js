import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
// import {thunk} from "redux-thunk"

import { rootReducer } from "./rootReducer";
// import { loggerMiddleware, thunkMiddleware } from "./middleware"


/*
	① "RTK" (@reduxjs/toolkit) package provides the "configureStore" function
		which manages "new state" that the "Reducer" function returns as an object,
		called "Store".																	<--- ***

	② The "configureStore()" function provided by "RTK" returns the "Redux store".	   <--- ***
*/
// const userLogger = process.env.NODE_ENV !== "production"

const initializeStore = () => {	
	return configureStore({
		reducer: rootReducer,

		// It's possible for user-defined middlewares to put into the simple array
		// in *ONLY* "JavaScript" as follows:	(***)
		// 	ⓐ thunk : Redux built-in thunk middleware (redux-logger package) 
		//			   to do thunk action
		// 	ⓑ logger: Redux built-in logger middleware (redux-thunk package)
		//			   to print out before/after of App-Level State
		//
		// 	ⓒ loggerMiddleware : User-defined Redux middleware like "redux-logger" built-in middleware
		// 	ⓓ thunkMiddleware  : User-defined Redux middleware like "redux-thunk"  built-in middleware

		// 1. Error in JavaScript & TypeScript - Uncaught Error: `middleware` field must be a callback
		// middleware: [thunk, logger, loggerMiddleware, thunkMiddleware]							// XX

		// 2. @since React v18, OK in JavaScript, but also error in TypeScript
		// middleware: (gDM) => gDM(),												// OK : Without any Redux middlewares
		middleware: (gDM) => gDM().concat(logger),								// OK
		// middleware: (gDM) => gDM().concat(loggerMiddleware),						// OK
		// middleware: (gDM) => gDM().concat(logger, loggerMiddleware),				// OK
		// middleware: (gDM) => gDM().concat(loggerMiddleware, logger),				// OK, But 2 middlewares are mixed mishmash
		// middleware: (gDM) => gDM().concat(loggerMiddleware, thunkMiddleware),	// OK, But 2 middlewares are mixed mishmash
		// middleware: (gDM) => gDM().concat(thunk),								// OK
		// middleware: (gDM) => gDM().concat(thunk, thunkMiddleware),				// OK
		// middleware: (gDM) => gDM().concat(logger, thunk, loggerMiddleware),		// OK
		// middleware: (gDM) => gDM().concat(thunk, logger, loggerMiddleware),		// OK

		// OK, But 2 user-defined middlewares are mixed mishmash
		// middleware: (gDM) => 
		// 	gDM().concat(thunk, thunkMiddleware, logger, loggerMiddleware),

		// OK, But 2 user-defined middlewares are mixed mishmash
		// middleware: (gDM) => 
		// 	gDM().concat(thunk, logger, thunkMiddleware, loggerMiddleware),

		// OK, But 2 user-defined middlewares are mixed mishmash
		// middleware: (gDM) =>
		// 	gDM().concat(thunk, thunkMiddleware, logger, loggerMiddleware),

		// OK, But 2 user-defined middlewares are mixed mishmash
		// middleware: (gDM) =>
		// 	gDM().concat(thunk, logger, thunkMiddleware, loggerMiddleware),

		// middleware: (gDM) => gDM().concat(logger, thunk),						// OK
	})
} // initializeStore

// -----------------------

export
function useStore() {	// User-defined custom hook.
	console.group("ΩΩΩ useStore custom hook ΩΩΩ ")
	console.groupEnd()

	// -----------------------

	// The "useMemo" React hook will *ONLY* recompute the "memoized" value
	// when one of the "deps" has changed
	const store = useMemo(() => initializeStore(), [])
	return store
} // useStore



