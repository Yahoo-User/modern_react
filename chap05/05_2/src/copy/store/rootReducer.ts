// export {}
import { combineReducers } from "redux"
import type { Action } from "redux"

import type { AppState } from "./AppState"


// ② Prepare initial value of user-defined type of "App-Level States".
const initialAppState = {}

// ----------------

// ③ The "Reducer" function returns ⓒ new state with ⓐ current state and ⓑ action. <--- ***

// =======================
// 1st. version
// =======================

export
const rootReducer = (state: AppState = initialAppState, action: Action) => state


// =======================
// 2nd. version
// =======================

// export
// const rootReducer = combineReducers({
//
// }) // rootReducer

