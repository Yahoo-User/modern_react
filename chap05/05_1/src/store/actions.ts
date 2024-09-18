// export {}
import type {Action} from "redux"


// -----------------------
// 1st. version
// -----------------------
export
type SetTodayAction1st = Action & {
	  today: Date
}

// -----------------------
// 2nd. version
// -----------------------
export
type SetTodayAction2nd = Action<'setToday'> & {
	  today: Date
}

// --------------------

export
// type SetTodayAction = SetTodayAction1st
type SetTodayAction = SetTodayAction2nd





