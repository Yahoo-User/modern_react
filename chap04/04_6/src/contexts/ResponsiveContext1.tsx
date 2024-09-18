// export {}
import { createContext } from "react";
import type { FC, PropsWithChildren } from "react"


// -----------------------
// Shared Value Type

export
type ContextType = {
	breakpoint: string;
}

// -----------------------
// Default Shared Value

export
const defaultContextValue: ContextType = {
	breakpoint: ''
}

// -----------------------
// Create a Shared Data with type "React.Context<T>"
// Here, "T" type variable is the "ContextType" type.

const ResponsiveContext: React.Context<ContextType> = 
    createContext<ContextType>(defaultContextValue)		        // <--- ***

// -----------------------
export
type ResponsiveProviderProps = {}

// -----------------------
export
const ResponsiveProvider1: FC<PropsWithChildren<ResponsiveProviderProps>> = ({children, ...props}) => {
    // console.clear()
    console.group("§§§ ResponsiveProvider1 §§§")

	const breakpoint = "sm"
	
	// Represents "{ breakpoint: breakpoint }" more consisely. (***)
	const value = { breakpoint }
    console.log("value:", value)

    console.groupEnd()

    // --------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <ResponsiveContext.Provider value={value} children={children} />
} // ResponsiveProvider1








