import {useState, useCallback} from "react";


export
const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
	console.group("ΩΩΩ useToggle custom hook ΩΩΩ ")

	const [checked, setChecked] = useState<boolean>(initialChecked)
	// console.log("1. checked: %s, setChecked: %s", checked, setChecked)

	// const setChecked: (value: React.SetStateAction<boolean>) => void

	// 1. Without "callback" and DL: [checked] when invoking the "setter"			(***)
	// const toggleChecked = useCallback<() => void>(() => setChecked(!checked), [checked])

	// 2. To resolve DL trouble, please use "callback" when invoking the "setter"	(***)
	const toggleChecked = useCallback<() => void>(() => setChecked(checked => !checked), [])
	// console.log("2. toggleChecked: %s", toggleChecked)

	console.groupEnd()
	
	// -----------------------

	return [ checked, toggleChecked ]
} // useToggle


