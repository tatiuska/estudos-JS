// Herança
// adicionando classe Book para o código funcionar
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        return this.isbn; // método para imprimir o ISBN
    }
    // criando métodos para os outros atributos dessa classe
    printPages() {
        return this.pages; // método para imprimir o número de páginas
    }
    printTitle(){
        return this.title; // método para imprimir o título do livro
    }
}

// criando classe herdeira de Book, ITBook
class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn); // usando super para referenciar o construtor da superclasse
        this.technology = technology; // instanciando o novo atributo
    }
    printTechnology() {
        // tirei a linha do console.log, pois no console estava printando undefined depois do nome de technology
        return this.technology; // método para imprimir o novo atributo
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
console.log(`Book title: ${jsBook.title}.`);
console.log(`Technology: ${jsBook.printTechnology()}.`);
console.log(`Number of pages: ${jsBook.pages} pages.`);
console.log(`ISBN: ${jsBook.printIsbn()}.`);