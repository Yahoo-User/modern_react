// export {}
import * as T from './1_types'


/*
	1. 	The user-defined "reducer" function returns "new" state
		with "prev" state and the user-defined "action".			<--- ***

	2.	This "reducer" function should be a "pure" function.		<--- ***
*/

// Define "initial value" of the specific "state"
// in the "App-Level State".
const initialState: T.State = {}

// Define the changed state correspoding to the given action
// in the "reducer" function.
const changedState: T.State = {}

// ----------------

// Declare the "reducer" function that returns changed state
// with the given state & action.
export
const reducer = (state: T.State = initialState, action: T.Actions) => {
	switch(action.type) {
		case "@prefix/actionName":
			return changedState;
	} // switch

	return state
} // reducer



