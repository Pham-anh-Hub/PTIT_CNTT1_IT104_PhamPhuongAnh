"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["BANNED"] = "banned";
})(UserStatus || (UserStatus = {}));
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    // {
    //     // Lay vao id, ten, pass, role, set islogin = active
    //     this.id = account.id;
    //     this.userName = account.userName;
    //     this.password = account.password;
    //     this.isLogin = account.isLogin;
    //     this.role = account.role;
    // }
    logOut(user) {
        if (user.isLogin) {
            user.isLogin = false;
        }
    }
}
// Bài 5
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(account) {
        if (account.status === UserStatus.ACTIVE) {
            console.log("Mời đăng nhập !!");
            account.isLogin = true;
        }
        else if (account.status === UserStatus.BANNED) {
            console.log("Tài khoản đã bị khóa!!");
        }
    }
}
const userList = [];
//Bài 6
class adminAcc extends Account {
    constructor(id, userName, password, isLogin) {
        super(id, userName, password, isLogin, "admin");
    }
    login(account) {
        if (!account.isLogin) {
            // chưa login
            console.log("Mời đăng nhập !!");
            account.isLogin = true;
        }
    }
    banUser(id, array) {
        const targetUser = array.find((user) => user.id === id);
        if (targetUser) {
            targetUser.status = UserStatus.BANNED;
        }
    }
}
const newAccount = new userAcc("001", "Nguyễn Văn A", "0123789456", false, "User", UserStatus.ACTIVE);
const newAccount1 = new userAcc("002", "Nguyễn Văn B", "0123789456", false, "User", UserStatus.ACTIVE);
newAccount.login(newAccount);
// newAccount.login(newAccount1);
userList.push(newAccount, newAccount1);
console.log("Thông tin nhân viên: ", JSON.parse(JSON.stringify(userList)));
const newAdmin = new adminAcc("Ad001", "Nguyễn Văn B", "0987123452", true);
newAdmin.banUser("001", userList);
console.log("Thông tin nhân viên: ", userList);
