import type {IUser} from './User'
import {makeRandomUser} from './User'
import * as C from './chance'
import * as I from './image'
import * as D from './date'


export
type ICard = {
    uuid: string
    writer: IUser
    image: string
    title: string
    paragraphs: string
    dayMonthYearDate: string
    relativeDate: string | null
}

// ---------------------------

export
const makeCard = (
    uuid: string,
    writer: IUser,
    image: string,
    title: string,
    paragraphs: string,
    dayMonthYearDate: string,
    relativeDate: string | null
): ICard => ({ 
    uuid,                 // uuid: uuid
    writer,               // writer: writer
    image,                // image: image
    title,                // title: title
    paragraphs,           // paragraphs: paragraphs
    dayMonthYearDate,     // dayMonthYearDate: dayMonthYearDate
    relativeDate          // relativeDate: relativeDate
}) // makeCard

// ---------------------------

export
const makeRandomCard = () => {
    const date = D.makeRandomPastDate()

    return makeCard(
        C.randomUUID(),
        makeRandomUser(),
        I.randomImage(800, 600),
        C.randomTitleText(),
        C.randomParagraphs(5),
        D.makeDayMonthYear(date),
        D.makeRelativeDate(date)
    )
} // makeRandomCard



