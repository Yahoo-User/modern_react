// Note: The following "console" method must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js   <--- ***

import * as U from "../data/date";


it("1. testMakeRandomPastDate", () => {
    const date: Date = U.makeRandomPastDate()
    console.log(`1. date: ${date}`)

    expect(date).toBeInstanceOf(Date)
})  // it

// ----------------------------------------

it("2. testMakeRelativeDate", () => {
    const relativeDate: string | null = U.makeRelativeDate(new Date())
    console.log(`2. relativeDate: ${relativeDate}`)

    expect(relativeDate).toContain("시간 전")
})  // it

// ----------------------------------------

it("3. testRandomRelativeDate", () => {
    const randomRelativeDate: string | null = U.randomRelativeDate()
    console.log(`3. randomRelativeDate: ${randomRelativeDate}`)

    expect(randomRelativeDate).toContain("전")
})  // it

// ----------------------------------------

it("4. testMakeDayMonthYear", () => {
    const makeDayMonthYear: string = U.makeDayMonthYear(U.makeRandomPastDate())
    console.log(`4. makeDayMonthYear: ${makeDayMonthYear}`)

    expect(makeDayMonthYear).toBeTruthy()
})  // it

// ----------------------------------------

it("5. testMakeDateWithTime", () => {
    const makeDateWithTime: string = U.makeDateWithTime(U.makeRandomPastDate())
    console.log(`5. makeDateWithTime: ${makeDateWithTime}`)

    expect(makeDateWithTime).toBeTruthy()
})  // it

// ----------------------------------------

it("6. testRandomDayMonthYear", () => {
    const randomDayMonthYear: string = U.randomDayMonthYear()
    console.log(`6. randomDayMonthYear: ${randomDayMonthYear}`)

    expect(randomDayMonthYear).toBeTruthy()
})  // it

// ----------------------------------------

it("7. testMakeDateWithFormat", () => {
    // OK, Default Format: 2023/11/22 09:39:07
    const makeDateWithFormat: string = U.makeDateWithFormat(new Date())

    // OK, Format: 2023/11/22
    // const makeDateWithFormat: string = U.makeDateWithFormat(new Date(), "yyyy/MM/dd")

    console.log(`7.makeDateWithFormat: ${makeDateWithFormat}`)

    expect(makeDateWithFormat).toBeTruthy()
})  // it





