// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import { picsumUrl, randomAvatar, randomImage } from "../data/image";


it("1. testPicsumUrl", () => {
    const result: string = picsumUrl(300, 300)
    console.log("1. result: %s", result)

    expect(result).toBe(`https://picsum.photos/300/300`)
})  // it

// ----------------------------------------

it("2. testRandomImage", () => {
    const result: string = randomImage()
    console.log(`2. result: ${result}`)

    expect(result).toContain("https://picsum.photos")
})  // it

// ----------------------------------------

it("3. testRandomAvatar", () => {
    const result: string = randomAvatar()
    console.log(`3. result: ${result}`)

    expect(result).toContain("https://picsum.photos")
})  // it






