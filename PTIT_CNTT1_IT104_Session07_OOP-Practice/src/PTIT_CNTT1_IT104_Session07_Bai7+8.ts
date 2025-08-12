abstract class Accounts {
    public accountNumber : string;
    protected balance : number;
    protected history : string[];
    protected status : boolean;
    constructor(accountNumber : string, balance : number){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = false; // Tài khoản mới
    }
    deposit(amount : number) : void{
        this.balance += amount;
        this.history.push(`Đã nạp ${amount.toLocaleString()} VND, ${(new Date())}, số dư hiện tại: ${this.balance.toLocaleString()} VND`);
    }
    abstract withDraw(amount : number) : void;

    showHistory() : void{
        this.history.forEach(time => {
            console.log(time);
        });
    }
}

class SavingAccount extends Accounts{
    interestRate : number;
    constructor(accountNumber : string, balance : number, interestRate : number){
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    withDraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount;
            this.history.push(`Đã rút ${amount.toLocaleString()} VND, ${new Date()}, số dư hiện tại: ${this.balance.toLocaleString()} VND`);
        }
    }
}

class CheckingAccount extends Accounts{
    constructor(accountNumber : string, balance : number){
        super(accountNumber, balance);
    }
    withDraw(amount: number): void {
        this.balance -= amount;
        this.history.push(`Đã rút ${amount.toLocaleString()} VND, ${new Date()}, số dư hiện tại: ${this.balance.toLocaleString()} VND`);
    }
}
const newSavingAccount = new SavingAccount("0987654321", 0, 6.4);
newSavingAccount.deposit(100000);
newSavingAccount.withDraw(20000);
console.log("Saving Account");
newSavingAccount.showHistory();


const newCheckingAcc = new CheckingAccount("09876123456", 0);
newCheckingAcc.deposit(100000);
newCheckingAcc.withDraw(20000);
console.log("Checking Account");

newCheckingAcc.showHistory();