import { Dispatch, Action } from "redux"


// Define a User-defined Redux Middleware.

export
// function loggerMiddleware<S = any>({getState}: {getState: () => S}) {								// OK
function loggerMiddleware<S = any>({dispatch, getState}: {dispatch: Dispatch, getState: () => S}) {	// OK
	console.group("♥♥♥ User-defined Redux logger middleware ♥♥♥")
	console.groupEnd()

	// -----------------------

	// return 2-order function
	return (next: Dispatch) => (action: Action) => { 			// <--- ***
		console.group(`loggerMiddleware action: ${action.type} @ ${new Date().toLocaleTimeString()}`)
		console.log("1. prev state\t", getState())
		console.log("2. action\t\t", action)
		
		const nextAction = next(action)							// <--- ***

		console.log("3. next state\t", getState())
		console.log("4. nextAction\t", nextAction)
		console.groupEnd()

		return nextAction
	}
} // loggerMiddleware


