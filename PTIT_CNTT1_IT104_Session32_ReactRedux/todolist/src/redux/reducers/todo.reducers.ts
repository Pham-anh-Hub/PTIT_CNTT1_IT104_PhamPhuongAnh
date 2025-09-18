export const enum Priority {
    pressing = "Khẩn cấp",
    vital = "Quan trọng",
    normal = "Bình thường",
    imnormal = "Không quan trọng"
}
export interface Task {
    id: number,
    title: string,
    isDone: boolean,
    levelPriority: keyof typeof Priority
}

const defaultTasks: Task[] = [
    {
        id: 1,
        title: "Xây dựng trang web",
        isDone: false,
        levelPriority: "normal"
    },
    {
        id: 2,
        title: "Viết tài liệu hướng dẫn",
        isDone: false,
        levelPriority: "imnormal"
    },
    {
        id: 3,
        title: "Thiết kế giao diện người dùng",
        isDone: false,
        levelPriority: "vital"
    },
    {
        id: 4,
        title: "Triển khai cơ sở dữ liệu",
        isDone: false,
        levelPriority: "pressing"
    },
    {
        id: 5,
        title: "Kiểm thử và sửa lỗi",
        isDone: false,
        levelPriority: "normal"
    }
]


const todoReducer = (state: Task[] = defaultTasks, action: { type: string, payload?: Task | string }) => {
    switch (action.type) {
        case "ADD":
            break
        default:
            return state
    }
}
export default todoReducer;