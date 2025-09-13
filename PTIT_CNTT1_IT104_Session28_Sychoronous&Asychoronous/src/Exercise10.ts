const addTask = (currTask : string, taskList : string[], callBack : (message: string) => void) => {
    const existed = taskList.find((task : string) => task === currTask);
    if(existed){
        callBack("Công việc cần thêm đã tồn tại")
        return
    }
    callBack("Thêm công việc thành công")
    taskList.push(currTask)
}

const alertAddNotice = (message : string) => {
    if(message.toLowerCase().trim() === "đã tồn tại"){
        console.error(message);
    }else{
        console.log(message);
    }
}

const deleteTask = (currTask : string, taskList : string[], callBack : (message: string) => void) => {
    const existed = taskList.findIndex((task : string) => task === currTask);
    if(existed === -1){
        callBack("Công việc cần xóa không tồn tại")
        return
    }
    callBack("Xóa công việc thành công")
    taskList.splice(existed, 1)
}

const alertDeleteNotice = (message : string) => {
    if(message.toLowerCase().trim() === "không tồn tại"){
        console.error(message);
    }else{
        console.log(message);
    }
}

const displayTasks = async (taskList : string[]) => {
    console.log("Element: ")
        taskList.forEach(element => {
       console.log(element);
        ;
    });
}

const tasks : string[] = [];

addTask("Hoc bai", tasks, alertAddNotice)
addTask("Nau com", tasks, alertAddNotice)
addTask("Quet nha", tasks, alertAddNotice)
addTask("Nau com", tasks, alertAddNotice) 

deleteTask("Hoc bai", tasks, alertAddNotice)
deleteTask("Rua bat", tasks, alertAddNotice)

displayTasks(tasks)


