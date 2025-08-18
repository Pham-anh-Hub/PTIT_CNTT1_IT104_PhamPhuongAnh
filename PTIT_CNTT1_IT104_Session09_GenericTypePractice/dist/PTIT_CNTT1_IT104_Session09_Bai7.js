"use strict";
class User {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const updateUser = (user, update) => {
    if (update.id !== undefined && (update === null || update === void 0 ? void 0 : update.id) != user.id) {
        return "Id cannot be changed";
    }
    return Object.assign(Object.assign({}, user), update);
};
const user = new User(1, "Alice", "alice@gmail.com");
const update1 = { name: "Alice Johnson" };
const update2 = { id: 2, name: "John" };
console.log(updateUser(user, update2));
// console.log(updateUser(user, update1)); // Sẽ báo lỗi đỏ vì update1 chưa được khai báo id
