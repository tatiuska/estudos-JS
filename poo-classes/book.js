// classe Book em POO
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function() {
    console.log(this.title);
};

// ES2015 - simplificando o código
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pag', 'isbn');
console.log(book.title); // mostra título livro
book.title = 'new title'; // atualiza valor do título
console.log(book.title); // mostra título livro