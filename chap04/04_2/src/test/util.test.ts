// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import { makeArray, range, random } from "../data/util";


it("test of makeArray", () => {
    const result: number[] = makeArray<number>(10, 7)   // OK
    // const result: number[] = makeArray<number>(10)   // OK
    // const result: number[] = makeArray<number>(10, undefined)   // OK

    // error ts(2345) - Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
    // const result: number[] = makeArray<number>(10, null)   // XX

    console.log(`1. result: ${result}`)

    //  ReferenceError: "result" is not defined         <--- ***
    expect(result.length).toBe(10)
})  // it

// ----------------------------------------

it("test of range", () => {
    const result: number[] = range<number>(3, 7, -1)
    console.log(`2. result: ${result}`)

    expect(result.length).toBe(4)
})  // it

// ----------------------------------------

it("test of random", () => {
    const min: number = 1, max: number = 45
    const result: number = random(min, max)

    console.log(`3. result: ${result}`)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
})  // it




