import type * as T from "./1_types"


/*
	According to the pre-defined "Action" types, To define "Action Generator"
	that create all required functions with the "payload" parameter value
	which return an object of the specified "Action" type.						<--- ***
*/

export
const setUser = (payload: T.State): T.SetUserAction => ({
	type: "@remoteUser/setUser",
	payload
})

// --------------------------------

export
const changeName = (payload: T.NameType): T.ChangeNameAction => ({
	type: "@remoteUser/changeName",
	payload
})

// --------------------------------

export
const changeEmail = (payload: string): T.ChangeEmailAction => ({
	type: "@remoteUser/changeEmail",
	payload
})

// --------------------------------

export
const changePicture = (payload: T.PictureType): T.ChangePictureAction => ({
	type: "@remoteUser/changePicture",
	payload
})


