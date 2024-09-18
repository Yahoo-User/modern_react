// export {}
import type { Action } from "redux";


// ---------------------------------------
// Define all required *actions* as the redux "Action" type.		<--- ***
// ---------------------------------------

export
type State = string

// ----------------

/*
	ⓐ "@copy/???" & ⓑ "payload" names are the naming convention
	of ⓐ "type" & ⓑ "variable" of an "Action" in Redux Community. <--- ***

	The "Action<T>" type == { type: string }						<--- ***
*/

export
type SetErrorMessageAction = Action<"@error/setErrorMessage"> & {
	payload: State
}

// ----------------

export
type Actions = 
	| SetErrorMessageAction




