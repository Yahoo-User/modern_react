// export {}
import type {Action} from "redux"

import type {AppState} from "./AppState"


// ② Prepare a initial value of user-defined type of "App-Level States".
const initialAppState1 = {
	today: new Date()
}

// --------------------------

// ③ The "Reducer" function returns ⓒ new state with ⓐ current state and ⓑ action.   <--- ***

export
// The 2nd. "action" parameter *NOT* used to create *NEW* state.  (***)
const rootReducer1 = (state: AppState = initialAppState1, action: Action) => state    // OK
// const rootReducer1 = (state: AppState = initialAppState1) => state    // OK


