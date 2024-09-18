import type { Action } from "redux";

import * as D from "../../data"


// ---------------------------------------
// To define all required *actions* as the redux "Action" type.		<--- ***
// ---------------------------------------

export
type Card = D.ICard

// ----------------

export
type State = Card[]

// ----------------

/*
	"@cards/addCard" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type AddCardAction = Action<"@cards/addCard"> & {
	payload: Card
}

// ----------------

/*
	"@cards/removeCard" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type RemoveCardAction = Action<"@cards/removeCard"> & {
	payload: string
}

// ----------------

export
type Actions = 
	| AddCardAction
	| RemoveCardAction






