// "luxon" package provides a "DateTime" class to get an hour. (***)
import { DateTime } from "luxon"


export
const makeRandomPastDate: () => Date = () => {
    const value: number = new Date().valueOf()  // In milliseconds.
    const n: number = 1000000

    return new Date(value - Math.floor(Math.random() * n * n))
} // makeRandomPastDate

// ----------------------------------------

export
const makeRelativeDate = (date: Date) => 
    DateTime.fromJSDate(date).startOf('day').toRelative()

// ----------------------------------------

export
const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())

// ----------------------------------------

export
const makeDayMonthYear = (date: Date) => 
    // OK, Only Year, Month, Days
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)

// ----------------------------------------

export
const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())

// ----------------------------------------

export
const makeDateWithTime = 
    // OK, Full Date with Full Time.
    (date: Date) => DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)

// ----------------------------------------

export
const makeDateWithFormat = (date: Date, fmt?: string) =>
    DateTime.fromJSDate(date).toFormat(fmt? fmt : "yyyy/MM/dd HH:mm:ss")




