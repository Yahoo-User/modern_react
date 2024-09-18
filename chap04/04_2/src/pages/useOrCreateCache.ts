export
const cache: Record<string, any> = {}   // Declared as a Global variale.  <--- *** : ①

// ----------------------------

export
const useOrCreateCache = <T>(key: string, cb: () => T): T => {
    console.group("ΩΩΩ useOrCreateCache custom hook ΩΩΩ ")

    // If "cache[key]" don't have a value,
    // the value created by "callback" saved into the "cache[key]".       <--- *** : ②
    // Interstingly, callback invoked only *ONCE*
    if (!cache[key]) cache[key] = cb()

    // ---------------------------------

    // Interstingly, The callback invoked only *ONCE*
    // This feature accords with the concept of Cache.                    <--- *** : ④

    // This generic function always returns the value of "cache[key]".    <--- *** : ③
    return cache[key] as T
} // useOrCreateCache

