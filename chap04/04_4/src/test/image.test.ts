// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import { picsumUrl, randomAvatar, randomImage } from "../data/image";


it("test for picsumUrl", () => {
    const result: string = picsumUrl(300, 300)
    console.log("1. result: %s", result)

    expect(result).toBe(`https://picsum.photos/300/300`)
})  // it

// ----------------------------------------

it("test for randomImage", () => {
    const result: string = randomImage()
    console.log(`2. result: ${result}`)

    expect(result).toContain("https://picsum.photos")
})  // it

// ----------------------------------------

it("test for randomAvatar", () => {
    const result: string = randomAvatar()
    console.log(`3. result: ${result}`)

    expect(result).toContain("https://picsum.photos")
})  // it






