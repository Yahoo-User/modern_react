// ts(2322) - Type 'null' is *NOT* assignable to type 'T'.  (***)
// 'T' could be instantiated with an arbitrary type which could be "unrelated" to 'null'. (***)
export
const makeArray = <T>(length: number, initialValue?: T) => {
    const arr: T[] = new Array<T>(length)

    return (initialValue !== undefined)? arr.fill(initialValue) : arr
} // makeArray

// ----------------------------------------

export
const range = <T>(min: number, max: number, initialValue: T): T[] => 
    makeArray<T>(max - min, initialValue).map<T>( (_: T, index: number) => (index + min) as T )

// ----------------------------------------

export
const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max-min)) + min


    


