"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, books, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.bookId = bookId;
        this.memberId = memberId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    // Bài 8
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach(book => {
            console.log(`${book.id} - ${book.title} - ${book.author} - ${book.status === true ? "Available" : "Lended"}`);
            console.log(`Số lượng còn lại: ${book.stock}`);
        });
    }
    // Bài 9
    regiterMember(member) {
        // member.books.forEach(book => {
        //     if(this.books.)
        // });
        // check thêm xem sách mà 
        this.members.push(member);
    }
    blockMember(idMember) {
        const memberTarget = this.members.find((member) => member.id === idMember);
        if ((memberTarget === null || memberTarget === void 0 ? void 0 : memberTarget.status) === true && (memberTarget === null || memberTarget === void 0 ? void 0 : memberTarget.status) !== undefined) {
            // trạng thái đang mở
            memberTarget.status = false; // chuyểnvefe thành đóng
        }
    }
    showMembers() {
        this.members.forEach(member => {
            console.log("Thông tin khách hàng: ");
            console.log(`${member.id} - ${member.name} - ${member.contact} - ${member.status ? "Đang mở" : "Đang khóa"}`);
            console.log("Các sách đang mượn: ", member.books);
        });
    }
}
const library = new Library([], []);
///////
library.addBook(new Book("001", "Sách số 1", "Tác giả 1", 10, true));
library.addBook(new Book("002", "Sách số 2", "Tác giả 2", 20, true));
library.addBook(new Book("003", "Sách số 3", "Tác giả 3", 10, true));
library.addBook(new Book("004", "Sách số 4", "Tác giả 4", 40, true));
library.addBook(new Book("005", "Sách số 5", "Tác giả 5", 5, true));
library.showBook();
////
library.regiterMember(new Member("001", "Nguyễn Văn A", "0987654321", [], false));
library.regiterMember(new Member("002", "lê Thị B", "0987654321", [], true));
library.regiterMember(new Member("003", "Trần Văn C", "0987654321", [], false));
library.regiterMember(new Member("004", "Lê Văn D", "0987654321", [], false));
library.regiterMember(new Member("005", "Nguyễn Thị E", "0987654321", [], true));
library.showMembers();
