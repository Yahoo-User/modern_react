export
type IRandomUser = {
	email	: string;
	name	: {title: string; first: string; last: string;}
	picture	: {large: string;}
} // IRandomUser

// -------------------------------

const convertRandomUser = (result: unknown) => {
	const {email, name, picture} = result as IRandomUser

	return {email, name, picture}
} // convertRandomUser

// -------------------------------

// ====================
// 1st. version of "fetchRandomUser".
// ====================
// export
// const fetchRandomUser: () => Promise<IRandomUser> = (): Promise<IRandomUser> => {
	
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.

// 	return (
// 		new Promise( (resolve, reject) => {
// 			fetch("https://randomuser.me/api/")
// 				.then(res => res.json())
// 				.then((data: unknown) => {
// 					console.log(data)		// Used when implementing "convertRandomUser"
// 
// 					const {results} = data as {results: IRandomUser[]}
// 					resolve(convertRandomUser(results[0]))
// 				})
// 				.catch(reject)
// 		}) // return new Promise object
// 	)
// } // fetchRandomUser


// ====================
// 2nd. version of "fetchRandomUesr".
// ====================
export
const fetchRandomUser: () => Promise<IRandomUser> = () =>

	// 1. (parameter) resolve : (value  : IRandomUser | PromiseLike<IRandomUser>) => void
	// 2. (parameter) reject  : (reason?: any) => void
	new Promise((resolve, reject) => 
		fetch("https://randomuser.me/api/")
			.then(res => res.json())
			.then((data: unknown) => {
				console.log(data)		// Used when implementing "convertRandomUser"

				const {results} = data as {results: IRandomUser[]}
				resolve(convertRandomUser(results[0])) 
			})
			.catch(reject)
	) // fetchRandomUser


