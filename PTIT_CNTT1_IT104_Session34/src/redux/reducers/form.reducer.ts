import type { Student } from "../../utils/types";


const defaultValue: Student = {
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
}

type FormPayload = {student: Student, mode: string}

type ActionType = { type: "UPDATE", payload: Student, mode: string } | { type: "RESETFORM"} | {type : "DETAIL", payload: Student, mode: string}

const formReducer = (state: FormPayload = {student: defaultValue,mode:""}, action: ActionType) => {
    switch (action.type) {
        case "UPDATE":
            return {student: action.payload, mode: "edit"}
        case "RESETFORM":
            console.log("reset ", state);
            return {student: defaultValue, mode: ""}
        case "DETAIL" :
            return {student: action.payload, mode: "detail"}
        default:
            return state
    }
}

export default formReducer