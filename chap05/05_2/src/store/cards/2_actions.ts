// export {}
import type * as T from "./1_types"


/*
	According to the pre-defined "Action" types, To define "Action Generator"
	that create all required functions with the "payload" parameter value
	which return an object of the specified "Action" type.						<--- ***
*/

export
const addCard = (payload: T.Card): T.AddCardAction => ({
	type: "@cards/addCard",
	payload						// == payload: payload
}) // addCard

// --------------------------------

export
const removeCard = (payload: string): T.RemoveCardAction => ({
	type: "@cards/removeCard",
	payload						// == payload: payload
}) // removeCard


