"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Accounts {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = false; // Tài khoản mới
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Đã nạp ${amount.toLocaleString()} VND, ${(new Date())}, số dư hiện tại: ${this.balance.toLocaleString()} VND`);
    }
    showHistory() {
        this.history.forEach(time => {
            console.log(time);
        });
    }
}
class SavingAccount extends Accounts {
    interestRate;
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    withDraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Đã rút ${amount.toLocaleString()} VND, ${new Date()}, số dư hiện tại: ${this.balance.toLocaleString()} VND`);
        }
    }
}
class CheckingAccount extends Accounts {
    constructor(accountNumber, balance) {
        super(accountNumber, balance);
    }
    withDraw(amount) {
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
//# sourceMappingURL=PTIT_CNTT1_IT104_Session07_Bai7+8.js.map