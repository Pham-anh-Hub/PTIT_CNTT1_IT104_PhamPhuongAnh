import type { Student } from "../../utils/types";


const cloneLocal = localStorage.getItem("studentList")
const defaultStudents: Student[] = cloneLocal ? JSON.parse(cloneLocal) : [
    {
        id: "SV001",
        name: "Nguyễn Văn A",
        age: 20,
        gender: "Nam",
        birthday: "2020-20-10",
        hometown: "Hà Nội",
        address: "Hà Đông, Hà Nội",
    },
];

type ActionType = { type: "ADD" | "DELETE", payload: Student } | { type: "SEARCH", payload: string } | { type: "EDIT", payload: Student } | { type: "ARRANGE" }

const studentReducer = (state: Student[] = defaultStudents, action: ActionType) => {
    const cloneStudentList = [...state]

    switch (action.type) {
        case "ADD":
            {
                const cloneAddList = [...state, action.payload]
                localStorage.setItem("studentList", JSON.stringify(cloneAddList))

                return cloneAddList
            }
        case "DELETE":
            {
                const cloneDelList = cloneStudentList.filter((item) => item.id !== action.payload.id)
                localStorage.setItem("studentList", JSON.stringify(cloneDelList))
                return cloneDelList
            }
        case "SEARCH":
            {
                if (action.payload) {
                    const targetSeach = cloneStudentList.filter((student) => student.name.toLowerCase().includes(action.payload.toLowerCase().trim()))
                    return targetSeach
                } else {
                    return defaultStudents
                }
            }
        case "EDIT":
            console.log(action.payload);
            if (action.payload) {
                const cloneUpdateList = cloneStudentList.map((student) => student.id === action.payload.id ? { ...action.payload, id: student.id } : student)
                localStorage.setItem("studentList", JSON.stringify(cloneUpdateList))
                return cloneUpdateList
            }
            return state
        case "ARRANGE":
            return cloneStudentList.sort((a, b) => a.age - b.age)
        default:
            return state
    }
};

export default studentReducer
