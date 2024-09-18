// export {}
import { Dispatch } from "redux"
import { setLoading } from "../2_actions"


// 2-order(high-order) function
export
// The "thunk action" passed to the "dispatch" parameter.	(***)
const doTimedLoading = (duration: number = 1000 * 3) => (dispatch: Dispatch) => {
	console.group("*** Redux thunk action: doTimedLoading ***")
	console.debug(`duration(${duration}), dispatch(${dispatch})`)
	console.groupEnd()

	// 1. "dispatch(action)" to send "setLoading" action to the "redux store"
	//	  to change "loading" state of "AppState" type with "true".
	dispatch(setLoading(true))

	const id = setTimeout(() => {
		clearTimeout(id)

		// 2. "dispatch(action)" to send "setLoading" action to the "redux store"
		//	  to change "load" state of "AppState" type with "false".
		dispatch(setLoading(false))
	}, duration)
} // doTimedLoading


