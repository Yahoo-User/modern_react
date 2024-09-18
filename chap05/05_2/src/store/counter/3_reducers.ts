// export {}
import type * as T from "./1_types"


/*
	The user-defined "reducer" function returns "new" state
	with "prev" state and the user-defined "action".			<--- ***
	This "reducer" function should be a "pure" function.		(***)
*/

const initialState: T.State = 0

// --------------------------------

export
const reducer = (state: T.State = initialState, action: T.Actions): T.State => {
	switch(action.type) {
		case "@counter/setCounter":
			return state + action.payload
	} // switch

	return state
} // reducer



