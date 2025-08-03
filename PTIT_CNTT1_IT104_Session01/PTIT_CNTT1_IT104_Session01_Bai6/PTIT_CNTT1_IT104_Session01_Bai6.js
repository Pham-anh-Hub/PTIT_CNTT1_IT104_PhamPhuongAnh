const createUser = (userName, Age, Role) => {
    let newUser = {
        name: userName,
        age: 18,
        role: "user",
    }
    if (Age !== undefined) {
        newUser.age = Age;
    }
    if (Role !== undefined) {
        newUser.role = Role;
    }
    return newUser;
}

console.log("New User: ", createUser("Nguyen Van B"));
console.log("New User: ", createUser("Nguyen Van A", 20, "Dev"));
