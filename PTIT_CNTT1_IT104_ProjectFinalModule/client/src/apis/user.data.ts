import type { Board, ListOfBoard, Task, User } from "../interfaces/board.interface";
import { axiosInstance } from "../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
    const response = await axiosInstance.get("/users")
    return response.data
})

// Thao tác thêm mới user khi đăng kí
export const addNewUser = createAsyncThunk("users/addNewUser", async (newUser: User) => {
    const response = await axiosInstance.post("/users", newUser)
    return response.data // trả về phần tử được thêm
})

// Thao tác thêm mới board
export const addNewBoard = createAsyncThunk("users/addNewBoard", async ({ id, newBoard }: { id: string; newBoard: Board }) => {
    try {
        // Lấy user hiện tại
        const user = (await axiosInstance.get(`/users/${id}`)).data;
        // Tạo bản cập nhật mới
        const updatedUser: User = {
            ...user,
            boards: [newBoard, ...user.boards],
            // cập nhật user với thuộc tính board thêm lên đầu
        };
        // Gửi PUT để cập nhật toàn bộ user
        const response = await axiosInstance.put(`/users/${id}`, updatedUser);

        return response.data; // Trả về user đã cập nhật
    } catch (error) {
        return error
    }
}
);

// Thao tác sửa thông tin board
export const editInfoBoard = createAsyncThunk("user/editInfoBoard", async ({ id, editBoard }: { id: string, editBoard: Board }) => {
    try {
        // Lấy user hiện tại
        const user = (await axiosInstance.get(`/users/${id}`)).data;
        const updatedBoards = user.boards.map((board: Board) => board.id === editBoard.id ? { ...board, ...editBoard } : board)
        // Tạo bản cập nhật mới
        const updatedUser: User = {
            ...user,
            boards: [...updatedBoards]
            // Cập nhật user hiện tạo với thuộc tính board đã được cập nhật thông tin (bao gồm backdrop và title)
        };
        // Gửi PUT để cập nhật toàn bộ user
        const response = await axiosInstance.put(`/users/${id}`, updatedUser);
        return response.data; // Trả về user đã cập nhật
    } catch (error) {
        return error
    }
})

// Thao tác đóng board (đóng board đang mở - thay đổi trạng thái)
export const closeTheBoard = createAsyncThunk("user/closeTheBoard", async ({ userId, boardId }: { userId: string, boardId: string }) => {
    try {
        const currentUser = (await axiosInstance.get(`/users/${userId}`)).data
        const filterCloseBoard = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, is_closed: true } : board)
        const updatedUser: User = {
            ...currentUser,
            boards: [...filterCloseBoard]
        }
        const response = await axiosInstance.put(`/users/${userId}`, updatedUser)
        return response.data
    } catch (error) {
        return error
    }
})

// Thao tác mở lại các board đã đóng
export const reOpenBoard = createAsyncThunk("user/reOpenBoard", async ({userId, reOpens}: {userId: string, reOpens : Board[]}) => {
    try {
        const currentUser : User = (await axiosInstance.get(`/users/${userId}`)).data
        const response = await axiosInstance.patch(`/users/${userId}`, {...currentUser, boards:reOpens});
        return response.data
    } catch (error) {
        return error
    }
})

// Thao tác xóa board
export const deleteBoard = createAsyncThunk("user/deleteBoard" , async ({userId, deletedBoards} : {userId: string, deletedBoards: Board[]}) =>{
    try {
        const currentUser : User = (await axiosInstance.get(`/users/${userId}`)).data
        const response = await axiosInstance.patch(`/users/${userId}`, {...currentUser, boards:deletedBoards});
        return response.data
    } catch (error) {
        return error
    }
})

// Thao tác đánh dấu sao cho board
export const starredTheBoard = createAsyncThunk("user/starredTheBoard", async ({ userId, boardId }: { userId: string, boardId: string }) => {
    try {
        const currentUser = (await axiosInstance.get(`/users/${userId}`)).data
        const filterStarredBoard = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, is_starred: !board.is_starred } : board)
        const updatedUser: User = {
            ...currentUser,
            boards: [...filterStarredBoard]
        }
        const response = await axiosInstance.put(`/users/${userId}`, updatedUser)
        return response.data
    } catch (error) {
        return error
    }
})


// Thêm mới list vào board
export const addListToBoard = createAsyncThunk("user/addListToBoard", async ({ userId, boardId, addedBoard }: { userId: string, boardId: string, addedBoard: Board }) => {
    try {
        const currentUser = (await axiosInstance.get(`/users/${userId}`)).data
        const updatedBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, ...addedBoard } : board)
        // Cập nhật lại danh sách board bao gồm board được cập nhật đã thêm list mới : bao gồm giữ nguyên các thuộc tính cũ của board và cập nhật các thuộc tính của board đã được thêm list
        const updatedUser: User = {
            ...currentUser, boards: updatedBoards
        }
        const response = await axiosInstance.put(`/users/${userId}`, updatedUser)
        return response.data
    } catch (error) {
        return error
    }
})

// Xóa list 
export const deleteListInBoard = createAsyncThunk("user/deleteListInBoard", async ({ userId, boardId, listId }: { userId: string, boardId: string, listId: string }) => {
    try {
        const currentUser = (await axiosInstance.get(`/users/${userId}`)).data
        const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
        const updateList = currentBoard.lists.filter((list: ListOfBoard) => list.id !== listId)
        // Lấy ra chi tiết từng 
        const updatesBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, lists: updateList } : board)
        const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatesBoards })
        return response.data
    } catch (error) {
        return error
    }
})

// Thay đổi tiêu đề của list cụ thể
export const onEditListTitle = createAsyncThunk("user/editListTitle", async ({ userId, boardId, listId, newTitle, }: { userId: string, boardId: string, listId: string, newTitle: string }) => {
    try {

        const currentUser = (await axiosInstance.get(`/users/${userId}`)).data
        const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
        const updateList = currentBoard.lists.map((list: ListOfBoard) => list.id === listId ? { ...list, title: newTitle } : list)
        // Lấy ra chi tiết từng 
        const updatesBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, lists: updateList } : board)
        const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatesBoards })
        return response.data
    } catch (error) {
        return error
    }
})

// Thao tác với Task
// Thêm mới task
export const addNewTaskToList = createAsyncThunk("user/addNewTaskToList", async ({ userId, boardId, listId, newTask }: { userId: string, boardId: string, listId: string, newTask: Task }) => {
    try {
        // Lấy ra người dùng hiện tại theo id
        const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
        // Lấy ra board hiện tại trong danh sách board của currentUser
        const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
        // Lấy ra list của Boards của người dùng hiện tại --> cập nhật lại list đó (thêm mới task) theo id 
        // const currentList = currentBoard?.lists.find((list : ListOfBoard) => list.id === listId)
        // Tiến hành thêm task vào list
        const updateLists = currentBoard?.lists.map((list: ListOfBoard) => list.id === listId ? { ...list, tasks: [newTask, ...list.tasks] } : list)
        // Cập nhật lại list trong board
        const updatedBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, lists: updateLists } : board)
        const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoards })
        return response.data
    } catch (error) {
        return error
    }
})

// Xóa task                                     action type prefix -> RTK sẽ tự động sinh ra 3 action type dựa trên prefix này (pending, rejected, fullfill) 
export const deleteTaskInList = createAsyncThunk("user/deleteTaskInList", async ({ userId, boardId, listId, taskId }: { userId: string, boardId: string, listId: string, taskId: string }) => {
    try {
        const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
        const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
        const currentList = currentBoard?.lists.find((list: ListOfBoard) => list.id == listId)
        if (!currentBoard || !currentList) return
        // Tiến hành update
        const updateTasks = currentList.tasks.filter((task: Task) => task.id !== taskId)
        const updatedLists = currentBoard?.lists.map((list: ListOfBoard) => list.id === listId ? { ...list, tasks: updateTasks } : list)
        const updatedBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, lists: updatedLists } : board)
        const response = await axiosInstance.patch(`users/${userId}`, { ...currentUser, boards: updatedBoards })
        return response.data
    } catch (error) {
        return error
    }
})

// Move card
export const moveTaskToAnotherList = createAsyncThunk("user/moveTaskToAnotherList", async ({ userId, boardId, updateTitleBoard, srcListId, distListId, targetTask }: { userId: string, boardId: string, updateTitleBoard: string, srcListId: string, distListId: string, targetTask: Task }) => {
    try {
        const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
        const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
        if (srcListId === distListId && updateTitleBoard === currentBoard?.title) {
            // Không có gì khác nhau 
            return currentUser
        }

        if (updateTitleBoard !== currentBoard?.title) {
            const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, title: updateTitleBoard } : board) })
            return response.data
        }
        // 2 list khác nhau ==> chuyển targetTask từ srcList sang distList

        const updatedBoards = currentUser.boards.map((board: Board) => {
            if (board.id !== boardId) return board;

            const updatedLists = board.lists.map((list) => {
                if (list.id === srcListId) {
                    return {
                        ...list,
                        tasks: list.tasks.filter((task) => task.id !== targetTask.id),
                    };
                }
                if (list.id === distListId) {
                    return {
                        ...list,
                        tasks: [targetTask, ...list.tasks],
                    };
                }
                return list;
            });

            return {
                ...board,
                title: updateTitleBoard,
                lists: updatedLists,
            };
        });
        const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoards })
        return response.data
    } catch (error) {
        return error
    }
})



export const onTickTask = createAsyncThunk("user/onTickTask", async ({ userId, boardId, listId, taskId }: { userId: string, boardId: string, listId: string, taskId: string }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const currentBoard = currentUser.boards.find((board: Board) => board.id === boardId)
    if (currentBoard) {
        const currentList = currentBoard.lists.find((list: ListOfBoard) => list.id === listId)
        if (currentList) {
            const updateTasks = currentList.tasks.map((task: Task) => task.id === taskId ? { ...task, status: task.status === "pending" ? "completed" : "pending" } : task)
            const updateLists = currentBoard.lists.map((list: ListOfBoard) => list.id === listId ? { ...list, tasks: updateTasks } : list)
            const updatedBoards = currentUser.boards.map((board: Board) => board.id === boardId ? { ...board, lists: updateLists } : board)


            const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoards })
            return response.data
        }
    }
    return currentUser
})

export const toggleLabelTask = createAsyncThunk("user/toggleLabelTask", async ({ userId, updatedBoards }: { userId: string, updatedBoards: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoards })
    return response.data
})

export const addNewTaskLabel = createAsyncThunk("user/addNewTaskLabel", async ({ userId, updatedBoards }: { userId: string, updatedBoards: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoards })
    return response.data as User
})

export const deleteTaskLabel = createAsyncThunk("user/deleteTaskLabel", async ({ userId, updatedLabelsInBoard }: { userId: string, updatedLabelsInBoard: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedLabelsInBoard })
    return response.data
})
export const updateDetailLabel = createAsyncThunk("user/updateDetailLabel", async ({ userId, updatedLabelsInfo }: { userId: string, updatedLabelsInfo: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedLabelsInfo })
    return response.data
})

export const updateTaskDueDate = createAsyncThunk("user/updateTaskDueDate", async ({ userId, updatedBoardsTask }: { userId: string, updatedBoardsTask: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoardsTask })
    return response.data
})
export const removeTaskDueDate = createAsyncThunk("user/removeTaskDueDate", async ({ userId, updatedBoardsTask }: { userId: string, updatedBoardsTask: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedBoardsTask })
    return response.data
})

export const updateTaskTitleDescription = createAsyncThunk("user/updateTaskTitleDescription", async ({ userId, updatedTaskBoard }: { userId: string, updatedTaskBoard: Board[] }) => {
    const currentUser: User = (await axiosInstance.get(`/users/${userId}`)).data
    const response = await axiosInstance.patch(`/users/${userId}`, { ...currentUser, boards: updatedTaskBoard })
    return response.data
})