export const enum Priority {
    pressing = "Khẩn cấp",
    vital = "Quan trọng",
    normal = "Bình thường",
    imnormal = "Không quan trọng",
}
export interface Task {
    id: number;
    title: string;
    isDone: boolean;
    levelPriority?: keyof typeof Priority;
}

const defaultTasks: Task[] = [
    {
        id: 1,
        title: "Xây dựng trang web",
        isDone: false,
        levelPriority: "normal",
    },
    {
        id: 2,
        title: "Viết tài liệu hướng dẫn",
        isDone: false,
        levelPriority: "imnormal",
    },
    {
        id: 3,
        title: "Thiết kế giao diện người dùng",
        isDone: false,
        levelPriority: "vital",
    },
    {
        id: 4,
        title: "Triển khai cơ sở dữ liệu",
        isDone: false,
        levelPriority: "pressing",
    },
    {
        id: 5,
        title: "Kiểm thử và sửa lỗi",
        isDone: false,
        levelPriority: "normal",
    },
];

type ActionType =
    | { type: "ADD"; payload: Task }
    | { type: "TOGGLE"; payload: number }
    | { type: "DELETE"; payload: number }
    | { type: "UPDATE"; payload: Task }
    | { type: "FILTER"; payload?: keyof typeof Priority }
    | { type: "DONEALL" } | { type: "DELETEALL" }

const todoReducer = (
    state: Task[] = defaultTasks,
    action: ActionType
): Task[] => {
    const cloneTaskList = [...state];
    switch (action.type) {
        case "ADD":
            return [...cloneTaskList, action.payload];
        case "TOGGLE":
            console.log("target toggle: ", action.payload);
            return cloneTaskList.map((item) =>
                item.id === Number(action.payload)
                    ? { ...item, isDone: !item.isDone }
                    : item
            );

        case "DELETE":
            console.log("target delete: ", action.payload);
            return cloneTaskList.filter((item) => item.id !== Number(action.payload));
        case "UPDATE":
            console.log(action.payload);
            return cloneTaskList.map((item) =>
                item.id === action.payload.id
                    ? {
                        ...item,
                        title: action.payload.title,
                        levelPriority: action.payload.levelPriority,
                    }
                    : item
            );
        case "FILTER":
            if (!action.payload) {
                return defaultTasks;
            } else {
                const cloneFilter = defaultTasks.filter(
                    (item) => item.levelPriority === String(action.payload)
                );
                return cloneFilter
            }
        case "DONEALL":
            return cloneTaskList.map((item: Task) => ({ ...item, isDone: true }))
        case "DELETEALL":
            return []
        default:
            return cloneTaskList;
    }
};
export default todoReducer;
