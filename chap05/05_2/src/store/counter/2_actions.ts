import type * as T from "./1_types"


/*
	According to the pre-defined "Action" types, To define "Action Generator"
	that create all required functions with the "payload" parameter value
	which return an object of the specified "Action" type.						<--- ***
*/

export
const setCounter = (payload: T.State): T.SetCounterAction => ({
	type: "@counter/setCounter",

	// payload: payload
	payload
})

// --------------------------------

export
const increaseCounter = () => setCounter(1)

// --------------------------------

export
const decreaseCounter = () => setCounter(-1)

