abstract class LibraryItem {
    id: number;
    title: string;
    isAvailable: boolean;
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.isAvailable = true;
    }
    borrowItem(): void {
        this.isAvailable = false;
        alert("Cập nhật thành công ");
    }

    returnItem(): void {
        this.isAvailable = true;
    }


    abstract calculateLateFee(daysOverdue: number): number;


    abstract getLoanPeriod(): number;

    abstract getItemType(): string;

}

class Member {
    memberId: number;
    name: string;
    contact: string;
    borrowedItems: LibraryItem[]
    constructor(memberId: number, name: string, contact: string, borrowedItems: LibraryItem[]) {
        this.memberId = memberId;
        this.name = name;
        this.contact = contact;
        this.borrowedItems = borrowedItems;
    }
    getDetails(): string {
        return `Thông tin thành viên: \nMã thành viên: ${this.memberId}\nTên: ${this.name}\nLiên hệ: ${this.contact}
        Các tài liệu đã mượn: ${this.borrowedItems}`
    }
}

class Book extends LibraryItem {
    author: string;
    standardTime: number;
    lateFee: number;
    constructor(id: number, title: string, author: string) {
        super(id, title);
        this.author = author;
        this.standardTime = 30;
        this.lateFee = 10000;
    }
    calculateLateFee(daysOverdue: number): number {
        return daysOverdue * this.lateFee;
    }
    getLoanPeriod(): number {
        return this.standardTime;
    }
    getItemType(): string {
        return "Sách";
    }
}

class Magazine extends LibraryItem {
    issueNumber: number;
    standardTime: number;
    lateFee: number
    constructor(issueNumber: number, id: number, title: string) {
        super(id, title);
        this.issueNumber = issueNumber;
        this.standardTime = 7;
        this.lateFee = 5000;
    }
    calculateLateFee(daysOverdue: number): number {
        return daysOverdue * this.lateFee;
    }
    getItemType(): string {
        return "Tạp chí"
    }
    getLoanPeriod(): number {
        return this.standardTime;
    }
}


class Loan {
    loanId: number;
    member: Member;
    item: LibraryItem;
    dueDate: string;
    isReturned: boolean;
    totalLateFee: number;
    constructor(loanId: number, member: Member, item: LibraryItem, dueDate: string, isReturned: boolean) {
        this.loanId = loanId;
        this.member = member;
        this.item = item;
        this.dueDate = dueDate;
        this.isReturned = isReturned;
        this.totalLateFee = 0;
    }
    getDetails(): string {
        return `Thông tin lượt mượn: \nMã lượt mượn: ${this.loanId}\nThành viên mượn: ${this.member}\nTài liệu mượn: ${this.item}\nHạn trả: ${this.dueDate}\nTrạng thái: ${this.isReturned ? "Đã trả" : "Chưa trả"}`
    }
}

class Library {
    items: LibraryItem[];
    members: Member[];
    loans: Loan[];
    constructor(items: LibraryItem[], members: Member[], loans: Loan[]) {
        this.items = items;
        this.members = members;
        this.loans = loans;
    }
    addItem(item: LibraryItem): void {
        this.items.push(item);
    }


    addMember(name: string, contact: string): void {
        let quantityMember: number = this.members.length;
        const newMember: Member = new Member(quantityMember += 1, name, contact, []);
        this.members.push(newMember);
    }


    borrowItem(memberId: number, itemId: number): void {
        let quantityLoans = this.loans.length;
        const memberLoan = this.members.find((member: Member) => member.memberId === memberId);
        if (memberLoan) {
            const targetItem = this.items.find((item: LibraryItem) => item.id === itemId);
            if (targetItem && targetItem.isAvailable) {
                const dueToDate: string = String(prompt("Nhập hạn trả tài liệu: "));
                targetItem.isAvailable = false;
                const newLoan = new Loan(quantityLoans += 1, memberLoan, targetItem, dueToDate, false);
                this.loans.push(newLoan);
            } else {
                alert("Không thấy tài liệu cần mượn.")
            }
        } else {
            alert("Không thấy thành viên cần mượn tài liệu.")
        }
    }


    returnItem(itemId: number): number {
        const targetLoan = this.loans.find((loan: Loan) => loan.item.id === itemId);
        if (!targetLoan) {
            console.log("Không tìm thấy tài liệu cần mượn");
            return 0;
        } else {
            targetLoan.isReturned = true;
            targetLoan.item.isAvailable = true;
            const timeLoan = Number(prompt(`Nhập số ngày đã mượn ${targetLoan.item.title}: `));
            if (timeLoan > targetLoan.item.getLoanPeriod()) {
                const fee = targetLoan.item.calculateLateFee(timeLoan - targetLoan.item.getLoanPeriod());
                targetLoan.totalLateFee = fee;
                return fee;
            } else {
                targetLoan.totalLateFee = 0;
                return 0;
            }

        }

    }


    listAvailableItems(): void {
        const availableItems = this.items.filter((item: LibraryItem) => item.isAvailable)
        if (availableItems.length > 0) {
            console.log("Các tài liệu có sẵn: ", availableItems);

        } else {
            alert("Không tài liệu nào có sẵn.")
        }
    }

    listMemberLoans(memberId: number): void {
        const memberLoans = this.loans.filter((loan: Loan) => loan.member.memberId === memberId);
        if (memberLoans.length > 0) {
            console.log("Các tài liệu thanh viên đã mượn: ");
            memberLoans.forEach(loan => {
                console.log(`${loan.item.getItemType()} - ${loan.item.title} `);
            });
        }
    }

    calculateTotalLateFees(): number {
        let totalLateFee = this.loans.reduce((total, loan) => total + loan.totalLateFee, 0);
        return totalLateFee;
    }


    getItemTypeCount(): void {
        const bookItems = this.items.filter((item: LibraryItem) => item.getItemType().toLowerCase() === "sách");
        const magazineItems = this.items.filter((item: LibraryItem) => item.getItemType().toLowerCase() === "tạp chí");
        console.log(`Số lượng sách: ${bookItems.length} cuốn
            Số lượng tạp chí: ${magazineItems.length} cuốn`);
    }

    updateItemTitle(itemId: number, newTitle: string): void {
        const targetIndex = this.items.findIndex((item: LibraryItem) => item.id == itemId);
        if (targetIndex !== -1) {
            this.items[targetIndex].title = newTitle;
        } else {
            alert("Không tìm thấy tài liệu cần cập nhật");
        }
    }
    // findEntityById<T extends { id: number } | { memberId: number }>(collection: T[], idTarget: number): T | undefined {
    //     const target = collection.find((element: T) => element.id === idTarget);
    //     if (target) {
    //         return target;
    //     }
    // }


}




let yourChoice: number;
const newLibrary: Library = new Library([], [], []);
do {
    yourChoice = Number(prompt(`======== MENU ========
1. Thêm thành viên mới.
2. Thêm tài liệu mới (1. Sách | 2. Tạp chí).
3. Mượn tài liệu (chọn thành viên, chọn tài liệu).
4. Trả tài liệu.
5. Hiển thị danh sách tài liệu có sẵn.
6. Hiển thị danh sách tài liệu đang mượn của một thành viên.
7. Tính và hiển thị tổng phí phạt đã thu.
8. Thống kê số lượng từng loại tài liệu.
9. Cập nhật tiêu đề một tài liệu.
10. Tìm kiếm thành viên hoặc tài liệu theo ID.
11. Thoát chương trình.
`));
    switch (yourChoice) {
        case 1:
            const newName = String(prompt("Nhập tên thành viên cần thêm: "))
            const newContact = String(prompt("Nhập liên hệ (phone | email): "))
            if (newName && newContact) {
                newLibrary.addMember(newName, newContact);

            } else {
                alert("Dữ liệu trống, mời thêm lại !");
            }
            console.log(newLibrary.members);
            alert("Thêm mới thành công !!")
            break;
        case 2:

            const itemChoice = Number(prompt("1. Thêm sách\n2. Thêm tạp chí"));
            if (itemChoice === 1) {
                let quantityItem = newLibrary.items.length;
                const newTitle = String(prompt("Nhập tên sách cần mượn: "));
                const newAuthor = String(prompt("Nhập tên tác giả: "));
                const newBook = new Book(quantityItem += 1, newTitle, newAuthor);
                newLibrary.addItem(newBook);


            } else if (itemChoice === 2) {
                let quantityItem = newLibrary.items.length;
                const issueNumber = Number(prompt("Nhập số kỳ phát hành: "));
                if (issueNumber) {
                    const newTileMagazine = String(prompt("Nhập tên tạp chí: "))
                    const newMagazine = new Magazine(issueNumber, quantityItem += 1, newTileMagazine);
                    newLibrary.addItem(newMagazine);
                }
            }
            console.log(newLibrary.items);
            alert("Thêm mới thành công !!");
            break;
        case 3:
            const memberId = Number(prompt("Nhập id thành viên cần mượn: "));
            const itemId = Number(prompt("Nhập mã tài liệu cần mượn: "));
            newLibrary.borrowItem(memberId, itemId);
            break;
        case 4:
            const itemReturnId = Number(prompt("Nhập mã tài liệu cần trả: "));
            const lateFee = newLibrary.returnItem(itemReturnId);
            if (lateFee !== 0) {
                console.log("Phí phạt muộn: ", lateFee);
            }
            break;
        case 5:
            newLibrary.listAvailableItems();
            break;
        case 6:
            const memberLoanId = Number(prompt("Nhập id thành viên: "));
            newLibrary.listMemberLoans(memberLoanId);
            break;
        case 7:
            const totalFee = newLibrary.calculateTotalLateFees();
            console.log("Tổng phí phạt được thống kê: ", totalFee);
            break;
        case 8:
            newLibrary.getItemTypeCount();
            break;
        case 9:
            const updateItemId = Number(prompt("Nhập id tài liệu cần cập nhật: "))
            const newTitleToUpdate = String(prompt("Nhập tên tài liệu cập nhật: "));
            newLibrary.updateItemTitle(updateItemId, newTitleToUpdate);
            break;
        case 10:

            break;
        case 11:
            alert("Hẹn gặp lại !!");
            break;
        default:
            alert("Lựa chọn không hợp lệ !")
            break;
    }

} while (yourChoice !== 11);



