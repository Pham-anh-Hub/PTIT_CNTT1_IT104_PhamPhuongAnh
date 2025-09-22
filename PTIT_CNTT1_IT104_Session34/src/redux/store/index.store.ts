import { createStore } from "redux";
import rootReducer from "../reducers/index.reducers";

const store = createStore(rootReducer)
export default store

export type RootState = ReturnType<typeof store.getState>
