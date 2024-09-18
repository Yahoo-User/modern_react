// export {}
import type { Action } from "redux";


// ---------------------------------------
// To define all required *actions* as the redux "Action" type.		<--- ***
// ---------------------------------------

export
type State = number

// --------------------------------

/*
	"@counter/setCounter" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type SetCounterAction = Action<"@counter/setCounter"> & {
	payload: State
}

// --------------------------------

export
type Actions = SetCounterAction


