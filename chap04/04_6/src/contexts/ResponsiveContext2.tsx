// export {}
import { createContext, useContext } from "react";
import type { FC, PropsWithChildren } from "react"

import type { ContextType, ResponsiveProviderProps } from "./ResponsiveContext1"
import { defaultContextValue } from "./ResponsiveContext1"
import { useWindowResize } from "../hooks";


// -----------------------
// Create a Shared Data with type "React.Context<T>"
// Here, "T" type variable is the "ContextType" type.

const ResponsiveContext: React.Context<ContextType> = 
    createContext<ContextType>(defaultContextValue)		                        // <--- ***


// -----------------------
export
const ResponsiveProvider2: FC<PropsWithChildren<ResponsiveProviderProps>> = ({children, ...props}) => {
    // console.clear()
    console.group("§§§ ResponsiveProvider2 §§§")

	const [width] = useWindowResize()
    // console.log("1. width:", width)

    const breakpoint = width <  640? "sm"   :
                       width <  769? "md"   :
                       width < 1024? "lg"   :
                       width < 1280 ? "xl"  : "2xl"

    // console.log("2. breakpoint:", breakpoint)

    const value = { breakpoint }     // equals to the "{ breakpoint: breakpoint }"
    // console.log("3. value:", value)

    console.groupEnd()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <ResponsiveContext.Provider value={value} children={children} />      // <--- ***
} // ResponsiveProvider2


// -----------------------
// Custom Hook Definition
// -----------------------
export
const useResponsive = () => {                                                           // <--- ***
    // console.clear()
    console.group("ΩΩΩ useResponsive ΩΩΩ")

    const {breakpoint} = useContext(ResponsiveContext)                                  // <--- ***
    // console.log("breakpoint:", breakpoint)

    console.groupEnd()

    return breakpoint                                                                   // <--- ***
} // useResponsive


