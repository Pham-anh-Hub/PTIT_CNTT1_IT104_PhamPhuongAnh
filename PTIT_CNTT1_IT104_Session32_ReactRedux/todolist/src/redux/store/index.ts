
import { createStore } from "redux";
import todoReducer from "../reducers/todo.reducers";

const stores = createStore(todoReducer);

export default stores

export type RootState = ReturnType<typeof stores.getState>;