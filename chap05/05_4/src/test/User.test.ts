// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import * as U from "../data/User";


it("1. testMakeUser", () => {
    const user: U.IUser =
        U.makeUser("1", "yoseph", "Professor", "cherryneo@kaist.ac.kr", "")
    console.log("1. user: %s", user)

    expect(user).toBeTruthy()
})  // it

// ----------------------------------------

it("2. testMakeRandomUser", () => {
    const randomUser: U.IUser = U.makeRandomUser()
    console.log("2. randomUser: %s", randomUser)

    expect(randomUser).toBeTruthy()
})  // it







