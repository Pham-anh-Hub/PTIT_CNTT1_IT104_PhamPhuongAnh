import { combineReducers } from "redux";
import studentReducer from "./students.reducers";
import formReducer from "./form.reducer";

const rootReducer = combineReducers({
    students : studentReducer,
    formInfo : formReducer
})
export default rootReducer
