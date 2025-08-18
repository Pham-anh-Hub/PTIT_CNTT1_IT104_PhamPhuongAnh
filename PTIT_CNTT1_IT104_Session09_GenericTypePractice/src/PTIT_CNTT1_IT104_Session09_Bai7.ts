class User {
    id: number;
    name: string;
    email: string;
    age?: number;
    constructor(id: number, name: string, email: string, age?: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age
    }
}



const updateUser = <T extends { id: number }, U extends { id?: number }>(user: T, update: U): T & U | string => {
    if (update.id !== undefined && update?.id != user.id) {
        return "Id cannot be changed"
    }
    return { ...user, ...update };
}

const user = new User(1, "Alice", "alice@gmail.com");
const update1 = { name: "Alice Johnson" };
const update2 = { id: 2, name: "John" };

console.log(updateUser(user, update2));
// console.log(updateUser(user, update1)); // Sẽ báo lỗi đỏ vì update1 chưa được khai báo id
