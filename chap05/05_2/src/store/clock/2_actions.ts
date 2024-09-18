// export {}
import type * as T from "./1_types"


/*
	According to the pre-defined "Action" types, To define "Action Generator"
	that create all required functions with the "payload" parameter value
	which return an object of the specified "Action" type.						<--- ***
*/

export
const setClock = (payload: T.State): T.SetClockAction => ({
	type: "@clock/setClock",
	payload							// == payload: payload
})	// setClock

