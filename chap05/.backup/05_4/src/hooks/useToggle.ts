import { useState, useCallback } from "react";


export
type SetToggle = () => void

// -------------------------------

// error ts(2371) - A parameter initializr is *only* allowed
// 					in a "function" or "constructor" implementation.
export
const useToggle: (p?: boolean) => [boolean, SetToggle] = (initialChecked: boolean = false) => {
	console.group("ΩΩΩ useToggle custom hook ΩΩΩ ")

	// console.log("01. initialChecked:", initialChecked)

	const [checked, setChecked] = useState<boolean>(initialChecked)
	// console.log("02. checked:", checked)

	// -----------------------

	// const setChecked: (value: React.SetStateAction<boolean>) => void

	// 1. Without "cb" and DL: [checked] when invoking the "setter"			(***)
	// const toggleChecked = useCallback<SetToggle>(() => setChecked(!checked), [checked])

	// 2. To resolve DL trouble, please use "cb" when invoking the "setter"	(***)
	const toggleChecked = useCallback<SetToggle>(() => setChecked(checked => !checked), [])

	// console.log("03. toggleChecked: %s", toggleChecked)

	console.groupEnd()
	
	return [checked, toggleChecked]
} // useToggle


