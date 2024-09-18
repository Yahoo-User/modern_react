import type * as T from "./1_types"


/*
	1. 	The user-defined "reducer" function returns "new" state
		with "prev" state and the user-defined "action".			<--- ***

	2.	This "reducer" function should be a "pure" function.		<--- ***
*/

const initialState: T.State = false

// --------------------------------

export
const reducer = (state: T.State = initialState, action: T.Actions) => {
	switch(action.type) {
		case "@loading/setLoading":
			return action.payload
	}

	return state
} // reducer




