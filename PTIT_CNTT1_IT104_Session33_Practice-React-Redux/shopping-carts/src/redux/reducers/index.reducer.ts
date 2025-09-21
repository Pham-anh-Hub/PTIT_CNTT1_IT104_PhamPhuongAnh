import { combineReducers } from "redux";
import listItemReducer from "./items.reducer";
import cartReducer from "./carts.reducers";
import alertReducer from "./alert.reducers";



const rootReducer = combineReducers({
    items : listItemReducer, 
    carts : cartReducer,
    alertItem: alertReducer
})

export default rootReducer

// Định nghĩa RootState type
export type RootState = ReturnType<typeof rootReducer>;