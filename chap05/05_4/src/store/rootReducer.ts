import {combineReducers} from "redux";

import * as L from "./listEntities"
import * as LO from "./listIdOrders"
import * as C from "./cardEntities"
import * as LC from "./listIdCardIdOrders"


export
const rootReducer = combineReducers({
	listEntities: L.reducer,
	listIdOrders: LO.reducer,
	cardEntities: C.reducer,
	listIdCardIdOrders: LC.reducer
}) // rootReducer


