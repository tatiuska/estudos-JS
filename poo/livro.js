// Função Book
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Instanciando a classe
var book = new Book('title', 'pag', 'isbn');

// acessando as propriedades e atualizando
console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado

// Métodos
Book.prototype.printTitle = function() {
    console.log(this.title);
};
book.printTitle();

// Declarando funções na definição da classe
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    };
}
book.printIsbn();