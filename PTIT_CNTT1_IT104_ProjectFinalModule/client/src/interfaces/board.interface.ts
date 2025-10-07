export interface Label {
    id: string,
    content: string
    color: string
}


export interface Task {
    id: string
    title: string,
    description: string,
    status: "pending" | "completed" | string
    due_date: string,
    create_at: string
    tags: Label[]
}

export interface ListOfBoard {
    id: string,
    title: string,
    create_at: string,
    tasks: Task[]
}


export interface Board {
    backdrop: {id : string,type : string, bgImage: string},
    id: string;
    title: string;
    description: string;
    is_create: string;
    is_starred: boolean;
    lists: ListOfBoard[]
}

export interface User {
    id: string;
    username: string
    email: string
    password: string
    create_at: string
    boards: Board[]
}