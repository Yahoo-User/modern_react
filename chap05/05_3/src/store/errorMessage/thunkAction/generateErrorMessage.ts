// export {}
import { Dispatch } from "redux";
import { setErrorMessage } from "../2_actions";


// 2-order(high-order) function
export
// The "thunk action" passed to the "dispatch" parameter.	(***)
const generateErrorMessage = (errorMessage: string = "some error occured") => (dispatch: Dispatch) => {
	console.group("*** Redux thunk action: generateErrorMessage ***")
	console.log(`errorMessage(${errorMessage}), dispatch(${dispatch})`)
	console.groupEnd()

	// 1. "dispatch(action)" to send "setErrorMessage" action to the "redux store"
	//	  to change "errorMessage" state of "AppState" type with "".
	dispatch(setErrorMessage(''))						// <--- ***

	try {
		throw new Error(errorMessage)
	} catch(e) {
		if (e instanceof Error) {
			
			// 2. "dispatch(action)" to send "setErrorMessage" action to the "redux store"
			//	  to change "errorMessage" state of "AppState" type with e.message.
			dispatch(setErrorMessage(e.message))		// <--- ***
		} // if
	} // try-catch
} // generateErrorMessage


