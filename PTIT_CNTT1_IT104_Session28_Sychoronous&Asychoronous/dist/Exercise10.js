"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const addTask = (currTask, taskList, callBack) => {
    const existed = taskList.find((task) => task === currTask);
    if (existed) {
        callBack("Công việc cần thêm đã tồn tại");
        return;
    }
    callBack("Thêm công việc thành công");
    taskList.push(currTask);
};
const alertAddNotice = (message) => {
    if (message.toLowerCase().trim() === "đã tồn tại") {
        console.error(message);
    }
    else {
        console.log(message);
    }
};
const deleteTask = (currTask, taskList, callBack) => {
    const existed = taskList.findIndex((task) => task === currTask);
    if (existed === -1) {
        callBack("Công việc cần xóa không tồn tại");
        return;
    }
    callBack("Xóa công việc thành công");
    taskList.splice(existed, 1);
};
const alertDeleteNotice = (message) => {
    if (message.toLowerCase().trim() === "không tồn tại") {
        console.error(message);
    }
    else {
        console.log(message);
    }
};
const displayTasks = (taskList) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Element: ");
    taskList.forEach(element => {
        console.log(element);
        ;
    });
});
const tasks = [];
addTask("Hoc bai", tasks, alertAddNotice);
addTask("Nau com", tasks, alertAddNotice);
addTask("Quet nha", tasks, alertAddNotice);
addTask("Nau com", tasks, alertAddNotice);
deleteTask("Hoc bai", tasks, alertAddNotice);
deleteTask("Rua bat", tasks, alertAddNotice);
displayTasks(tasks);
