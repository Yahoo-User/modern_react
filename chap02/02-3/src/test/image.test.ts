// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import { picsumUrl, randomAvatar, randomImage } from "../data/image";

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * 1. var it: jest.It(name: string, fn?: jest.ProvidesCallback | undefined, timeout?: number | undefined) => void
 * ---------------------------------------------------------------------------
 * Creates a test closure.
 * 
 * @param name      - The name of your test
 * @param fn        - The function for your test
 * @param timeout   - The timeout for an "async" function test
 * 
 * ---------------------------------------------------------------------------
 * 2. (method) jest.Matchers<void, number[]>.toBe<number>(expected: number): void
 * ---------------------------------------------------------------------------
 * Checks that a value is what you expect.
 * It uses "Object.is" to check strict equality.
 * Don't use "toBe" with "floating-point" numbers.
 * 
 * Optionally, you can provide a "type" for the "expected" value via a "generic".
 * This is particularly useful for ensuring "expected" objects have the right structure.
 * 
 * ---------------------------------------------------------------------------
 * 3. const expect: jest.Expect<number[]>(actual: number[]) => jest.JestMatchers<number[]>
 * ---------------------------------------------------------------------------
 * The expect function is used every time you want to test a value.
 * You will rarely call expect by itself.
 * 
 * @param actual - The value to apply matchers against.
 * 
 */

it("test for picsumUrl", () => {
    const result: string = picsumUrl(300, 300)
    console.log("1. result: %s", result)

    expect(result).toBe(`https://picsum.photos/300/300`)
})  // it

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * (method) jest.Matchers<void, string>.toContain<string>(expected: string): void
 * ---------------------------------------------------------------------------
 * Used when you want to check that an item is in a list.
 * For testing the items in the list, this uses ===, a strict equality check.
 * It can also check whether a string is a substring of another string.
 * 
 * Optionally, you can provide a type for the expected value via a generic.
 * This is particularly useful for ensuring expected objects have the right structure.
 */

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

// ----------------------------------------



