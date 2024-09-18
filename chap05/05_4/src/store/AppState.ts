import * as L	from "./listEntities"
import * as LO 	from "./listIdOrders"
import * as C 	from "./cardEntities"
import * as LC 	from "./listIdCardIdOrders"


// Define "App-Level State" Type
export
type AppState = {
	listEntities: L.State;
	listIdOrders: LO.State;
	cardEntities: C.State;
	listIdCardIdOrders: LC.State;
} // AppState


