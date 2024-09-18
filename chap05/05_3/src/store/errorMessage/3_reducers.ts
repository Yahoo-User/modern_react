import type * as T from "./1_types"


/*
	The user-defined "reducer" function returns "new" state
	with "prev" state and the user-defined "action".			<--- ***
	This "reducer" function should be a "pure" function.		(***)
*/

const initialState: T.State = ''

// --------------------------------

export
const reducer = (state: T.State = initialState, action: T.Actions) => {
	switch(action.type) {
		case "@error/setErrorMessage": return action.payload
		default: return state
	}
} // reducer


