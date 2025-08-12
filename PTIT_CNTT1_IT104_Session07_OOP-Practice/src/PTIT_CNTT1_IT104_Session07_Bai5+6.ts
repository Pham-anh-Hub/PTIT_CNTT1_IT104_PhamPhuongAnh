enum UserStatus{
    ACTIVE = "active",
    INACTIVE = "inactive",
    BANNED = "banned",
}
abstract class Account {
    id : string;
    userName : string;
    private password: string;
    isLogin : boolean;
    role : string;
    constructor(id : string, userName : string, password: string, isLogin : boolean, role : string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    // Phương thức đăng nhập
    abstract login(account : any) : void;
    // {
    //     // Lay vao id, ten, pass, role, set islogin = active
    //     this.id = account.id;
    //     this.userName = account.userName;
    //     this.password = account.password;
    //     this.isLogin = account.isLogin;
    //     this.role = account.role;
    // }
    logOut(user : Account) : void{
        if(user.isLogin){
            user.isLogin = false;
        }
    }
}
// Bài 5
class userAcc extends Account{
    status : UserStatus;
    constructor(id : string, userName : string, password: string, isLogin : boolean, role : string, status : UserStatus){
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(account: userAcc): void {
        if(account.status === UserStatus.ACTIVE){
            console.log("Mời đăng nhập !!");
            account.isLogin = true;
        }else if(account.status === UserStatus.BANNED){
            console.log("Tài khoản đã bị khóa!!");
        }
    }
}

const userList : userAcc[] = [];

//Bài 6
class adminAcc extends Account{
    constructor(id : string, userName : string, password: string, isLogin : boolean){
        super(id, userName, password, isLogin, "admin");
    }
    login(account: Account): void {
        if(!account.isLogin){
            // chưa login
            console.log("Mời đăng nhập !!");
            account.isLogin = true;
        }
    }

    banUser(id : string, array : userAcc[]) : void{
        const targetUser = array.find((user) => user.id === id);
        if(targetUser){
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

