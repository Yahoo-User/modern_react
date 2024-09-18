// export {}
import type {Action} from "redux"

import type {SetTodayAction} from "./actions"
import type {AppState} from "./AppState"


// ② Prepare initial value of user-defined type of "App-Level States".
const initialAppState2 = {
	today: new Date()
}

// --------------------------

// ③ The "Reducer" function returns ⓒ new state with ⓐ current state and ⓑ action. <--- ***

// -----------------------
// 1st. version
// -----------------------
export
// The 2nd. "action" parameter *NOT* used to create *NEW* state.  (***)
const rootReducer1st = (prevState: AppState = initialAppState2, action: Action) => {
    const newState = {...prevState}     // Deep Copy Needed. (***)

    // Returns 1st. parameter, "prevState" without any changes.
    return newState
} // rootReducer1st


// -----------------------
// 2nd. version
// -----------------------
export                                         //***//
//                                        ---------------
const rootReducer2nd = (state: AppState = initialAppState2, action: SetTodayAction) => {
    switch (action.type) {
        // ① If "action.type" is "setToday",
        //    Returns "new state" of "today" property with "action.today".  (***)
        case 'setToday':  return {...state, today: action.today}
    }

    // ② If "action" parameter is *NOT* the "SetTodayAction" type,
    //    Returns just "state" 1st. parameter without changes.  (***)
    return state            // *Requred*
}  // rootReducer2nd




