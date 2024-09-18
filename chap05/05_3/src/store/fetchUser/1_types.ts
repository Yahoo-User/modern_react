// export {}
import type { Action } from "redux";
import * as D from "../../data"


// ---------------------------------------
// Define all required *actions* as the redux "Action" type.		<--- ***
// ---------------------------------------

export
type State = D.IRandomUser

// -------------------------

/*
	ⓐ "@remoteUser/setUser" & ⓑ "payload" names are the naming convention
	of ⓐ "type" & ⓑ "variable" of an "Action" in Redux Community. <--- ***

	The "Action<T>" type == { type: string }						<--- ***
*/
export
type SetUserAction = Action<"@remoteUser/setUser"> & {
	payload: State
}

// -------------------------

/*
	"@remoteUser/changeEmail" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type ChangeEmailAction = Action<"@remoteUser/changeEmail"> & {
	payload: string
}

// -------------------------

export
type NameType = {
	title: string;
	first: string;
	last : string;
}

// -------------------------

/*
	"@remoteUser/changeName" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type ChangeNameAction = Action<"@remoteUser/changeName"> & {
	payload: NameType
}

// -------------------------

export
type PictureType = {
	large: string;
}

// -------------------------

/*
	"@remoteUser/changePicture" & "payload" names are the naming convention
	of "type" & "variable" of an "Action" in Redux Community.			<--- ***

	The "Action<T>" type == { type: string }							<--- ***
*/
export
type ChangePictureAction = Action<"@remoteUser/changePicture"> & {
	payload: PictureType
}

// -------------------------

export
type Actions = 
	| SetUserAction
	| ChangeEmailAction
	| ChangeNameAction
	| ChangePictureAction




