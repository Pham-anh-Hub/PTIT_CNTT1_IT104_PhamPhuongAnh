class Book{
    private id : string;
    private title : string;
    private author : string;
    constructor(id : string, title : string, author : string){
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }

    setTitle(newTitle : string){
        if(newTitle !== undefined && newTitle !== ""){
            this.title = newTitle;
        }
    }
    setAuthor(newAuthor : string){
        if(newAuthor !== undefined && newAuthor !== ""){
            this.author = newAuthor;
        }
    }

}

class Library{
    books : Book[] = [];
    constructor(books : Book[]){
        this.books = books;
    }

    addList(newBook : Book){
        this.books.push(newBook);
    }

    updateBook(idUpdate : string, title: string , author : string){
        const target  = this.books.findIndex((book : Book) => book.getId() === idUpdate);
        this.books[target].setTitle(title);
        this.books[target].setAuthor(author);
    }
    findBook(targetTitle : string){
        const findedBooks = this.books.filter((book : Book) => book.getTitle().includes(targetTitle));
        return findedBooks;
    }
    deleteBook(delId : string){
        const delIndex = this.books.findIndex((book : Book) => book.getId() === delId);
        this.books.splice(delIndex, 1);
    }
}


const book1 : Book = new Book("001","Sách số 01", "Tác giả 1");
const book2 : Book = new Book("002","Sách số 2", "Tác giả 2");
const book3 : Book = new Book("003","Sách số 03", "Tác giả 3");
const book4 : Book = new Book("004","Sách số 04", "Tác giả 4");
const book5 : Book = new Book("005","Sách số 5", "Tác giả 5");

let newLibrary = new Library([]);
newLibrary.addList(book1);
newLibrary.addList(book2);
newLibrary.addList(book3);
newLibrary.addList(book4);
newLibrary.addList(book5);
console.log(newLibrary);

// newLibrary.updateBook("002", "Sách số 2", "Tác giả số 02");
// console.log(newLibrary);

// const targetBooks = newLibrary.findBook("Sách số 0");
// console.log("Các sách cần tìm: ", targetBooks);

newLibrary.deleteBook("003");
console.log("Sách sau khi xóa: ", newLibrary);



