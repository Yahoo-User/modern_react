import * as U from "./util"


// prettier-ignore
export
const picsumUrl = (width: number, height: number): string => 
    `https://picsum.photos/${width}/${height}`

// ----------------------------------------

// prettier-ignore
export
const randomImage = (w: number = 1000, h: number = 800, delta: number = 200) =>
    picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

// ----------------------------------------

// prettier-ignore
export
const randomAvatar = () => {
    const size: number = U.random(200, 400)
    return picsumUrl(size, size)
} // randomAvatar

