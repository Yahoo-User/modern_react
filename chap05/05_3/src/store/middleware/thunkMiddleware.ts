// export {}
import { Action, Dispatch } from "redux";


export
// function thunkMiddleware<S = any>({getState}: {getState: () => S}) {									// XX
function thunkMiddleware<S = any>({dispatch, getState}: {dispatch: Dispatch, getState: () => S}) {	// OK
	console.group("♥♥♥ User-defined Redux thunk middleware ♥♥♥")
	console.groupEnd()

	// -----------------------
	
	// return 2-order function
	return (next: Dispatch) => (action: Action) => { 			// <--- ***
		console.group(`thunkMiddleware action: ${action.type} @ ${new Date().toLocaleTimeString()}`)
		console.log("1. prev state\t", getState())
		console.log("2. action\t\t", action)

		if(typeof action === "function") {
			console.log("3. dispatch(action, getState)")
			return dispatch(action, getState)					// <--- ***
		} // if

		const nextAction = next(action)							// <--- ***

		console.log("3. next state\t", getState())
		console.log("4. nextAction\t", nextAction)
		console.groupEnd()

		return nextAction
	}
} // thunkMiddleware


