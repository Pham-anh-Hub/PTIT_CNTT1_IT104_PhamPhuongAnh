"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title,
            this.author = author,
            this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(idBook) {
        const targetBook = this.books.find((book) => book.id == idBook);
        return targetBook;
    }
    removeBook(idBook) {
        const targetDel = this.books.findIndex((book) => book.id === idBook);
        if (targetDel !== -1) {
            this.books.splice(targetDel, 1);
        }
    }
    updateBook(idUpdate, updateBook) {
        const indexUpdate = this.books.findIndex((book) => book.id === idUpdate);
        if (indexUpdate !== -1) {
            this.books[indexUpdate] = Object.assign(Object.assign({}, this.books[indexUpdate]), updateBook);
        }
    }
    listBook() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searTerm) {
        const filterBooks = this.books.filter((book) => book.title.toLowerCase().includes(searTerm.toLowerCase()) || book.author.toLowerCase().includes(searTerm.toLowerCase()));
        return filterBooks;
    }
    findBookByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
const newLibrary = new Library();
const book1 = new Book(1, "Sách số 1", "Nguyễn Văn A", 2020);
const book2 = new Book(2, "Sách số 2", "Nguyễn Văn B", 2022);
const book3 = new Book(3, "Sách số 3", "Nguyễn Văn C", 2020);
const book4 = new Book(4, "Sách số 4", "Nguyễn Văn D", 2021);
// Thêm sách
newLibrary.addBook(book1);
newLibrary.addBook(book2);
newLibrary.addBook(book3);
newLibrary.addBook(book4);
// In ra danh sách Book
console.log("Danh sách các cuốn sách có trong thư viện: ", newLibrary.listBook());
//Lấy sách ra theo id
const targetBook = newLibrary.getBookById(3);
console.log("Sách cần lấy ra: ", targetBook);
// update book
const newUpdate = new Book(0, "Cuốn sách số 3", "tác giả số 3", 2020);
newLibrary.updateBook(3, newUpdate);
console.log("Sách sau khi đc update: ", newLibrary.getBookById(0));
