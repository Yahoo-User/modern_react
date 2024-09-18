// export {}
import { Dispatch } from "redux";

import * as L from "../loading"
import * as E from "../errorMessage"
import * as D from "../../data"

import { setUser, changeName, changeEmail, changePicture} from "./2_actions"


// 2-order (high-order) function
export
const getRemoteUser = () => (dispatch: Dispatch) => {
	dispatch(L.setLoading(true))							// change "loading" member state of "AppState" with "true"
	dispatch(E.setErrorMessage(''))							// change "errorMessage" member state of "AppState"

	D.fetchRandomUser()
		.then(user => dispatch(setUser(user)))				// change "fetchUser" member state of "AppState"
		.catch((e: Error) => E.setErrorMessage(e.message))	// If error occurred, change "errorMessage" member state of "AppState"
		.finally(() => dispatch(L.setLoading(false)))		// Lastly, change "loading" member state of "AppState" with "false"
} // getRemoteUser

// --------------------------------

// 2-order (high-order) function
export
const changeNameByFetching = () => (dispatch: Dispatch) => {
	dispatch(L.setLoading(true))							// change "loading" member state of "AppState" with "true"
	dispatch(E.setErrorMessage(''))							// change "errorMessage" member state of "AppState" with ""

	D.fetchRandomUser()
		.then(user => dispatch(changeName(user.name)))		// change only "name" of "fetchUser" member state of "AppState"
		.catch((e: Error) => E.setErrorMessage(e.message))	// If error occurred, change "errorMessage" member state of "AppState"
		.finally(() => dispatch(L.setLoading(false)))		// change "loading" member state of "AppState" with "false"
} // changeNameByFetching

// --------------------------------

// 2-order (high-order) function
export
const changeEmailByFetching = () => (dispatch: Dispatch) => {
	dispatch(L.setLoading(true))							// change "loading" member state of "AppState" with "true"
	dispatch(E.setErrorMessage(''))							// change "errorMessage" member state of "AppState" with ""

	D.fetchRandomUser()
		.then(user => dispatch(changeEmail(user.email)))	// change only "email" of "fetchUser" member state of "AppState"
		.catch((e: Error) => E.setErrorMessage(e.message))	// If error occurred, change "errorMessage" member state of "AppState"
		.finally(() => dispatch(L.setLoading(false)))		// change "loading" member state of "AppState" with "false"
} // changeEmailByFetching

// --------------------------------

// 2-order (high-order) function
export
const changePictureByFetching = () => (dispatch: Dispatch) => {
	dispatch(L.setLoading(true))							// change "loading" member state of "AppState" with "true"
	dispatch(E.setErrorMessage(''))							// change "errorMessage" member state of "AppState" with ""

	D.fetchRandomUser()
		.then(user => dispatch(changePicture(user.picture)))// change only "email" of "fetchUser" member state of "AppState"
		.catch((e: Error) => E.setErrorMessage(e.message))	// If error occurred, change "errorMessage" member state of "AppState"
		.finally(() => dispatch(L.setLoading(false)))		// change "loading" member state of "AppState" with "false"
} // changePictureByFetching



