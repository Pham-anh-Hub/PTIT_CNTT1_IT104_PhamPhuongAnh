import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counter.reducer";
import profileReducer from "../reducers/profile.reducer";
import listUserReducer from "../reducers/listUser.reducers";
import randomReducer from "../reducers/random.reducers";
import changeStateString from "../reducers/changeState.reducers";
import changeThemeReducer from "../reducers/changeTheme.reducers";
import registerReducer from "../reducers/register.reducer";
import loginReducer from "../reducers/login.reducer";

// Nơi chứa danh sách các reducer trong dự án

const reducers = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    listUser: listUserReducer,
    randomNumber: randomReducer,
    changeState: changeStateString,
    changeTheme: changeThemeReducer,
    register: registerReducer,
    login : loginReducer
});

const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof store.getState>;
