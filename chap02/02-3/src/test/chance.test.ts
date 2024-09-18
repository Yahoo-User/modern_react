// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import * as U from "../data/chance";            // Except for "export default"

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * (method) jest.Matchers<void, string>.toBeTruthy(): void
 * ---------------------------------------------------------------------------
 * Use when you don't care what a value is, you just want to ensure a value is true in a boolean context.
 * 
 * In JavaScript, there are six "falsy" values: false, 0, '', null, undefined, and NaN. (***)
 * Everything else is "truthy".
 */

it("1. testRandomUUID", () => {
    // const randomUUID: string = U.randomUUID()                     // OK
    // const randomUUID: string = U.randomUUID({ version: 4 })       // OK
    const randomUUID: string = U.randomUUID({ version: 5 })       // OK
    console.log(`1. randomUUID: ${randomUUID}`)

    expect(randomUUID).toBeTruthy()
})  // it

// ----------------------------------------

/**
 * ---------------------------------------------------------------------------
 * (method) jest.Matchers<void, string>.toBeTruthy(): void
 * ---------------------------------------------------------------------------
 * Use when you don't care what a value is, you just want to ensure a value is true in a boolean context.
 * In JavaScript, there are six "falsy" values: ① false  ② 0  ③ ''  ④ null  ⑤ undefined  ⑥ NaN.
 * 
 * Everything else is "truthy".
 */
it("2. testRandomName", () => {
    const randomName: string = U.randomName()
    console.log(`2. randomName: ${randomName}`)

    expect(randomName).toBeTruthy()
})  // it

// ----------------------------------------

it("3. testRandomEmail", () => {
    const randomEmail: string = U.randomEmail()
    console.log(`3. randomEmail: ${randomEmail}`)

    expect(randomEmail).toBeTruthy()
})  // it

// ----------------------------------------

it("4. testRandomId", () => {
    const randomId: string = U.randomId()
    console.log(`4. randomId: ${randomId}`)

    expect(randomId).toBeTruthy()
})  // it

// ----------------------------------------

it("5. testRandomJobTitle", () => {
    const randomJobTitle: string = U.randomJobTitle()
    console.log(`5. randomJobTitle: ${randomJobTitle}`)

    expect(randomJobTitle).toBeTruthy()
})  // it

// ----------------------------------------

it("6. testRandomCompanyName", () => {
    const randomCompanyName: string = U.randomCompanyName()
    console.log(`6. randomCompanyName: ${randomCompanyName}`)

    expect(randomCompanyName).toBeTruthy()
})  // it

// ----------------------------------------

it("7. testRandomSentence", () => {
    // const randomSentence: string = U.randomSentence()   // OK
    const randomSentence: string = U.randomSentence(10) // OK
    console.log(`7. randomSentence: ${randomSentence}`)

    expect(randomSentence).toBeTruthy()
})  // it

// ----------------------------------------

it("8. testRandomTitleText", () => {
    // const randomTitleText: string = U.randomTitleText()     // OK
    const randomTitleText: string = U.randomTitleText(10)    // OK
    console.log(`8. randomTitleText: ${randomTitleText}`)

    expect(randomTitleText).toBeTruthy()
})  // it

// ----------------------------------------

it("9. testRandomParagraphs", () => {
    const randomParagraphs: string = U.randomParagraphs(3)
    console.log(`9. randomParagraphs:\n\n${randomParagraphs}`)

    expect(randomParagraphs).toBeTruthy()
})  // it










