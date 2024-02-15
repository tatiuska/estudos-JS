// Criando strings sem concatenar valores
const book = {
    name: 'The Autobiography of a Yogi'
};

console.log('You are reading ' + book.name + ',\n and this is a new line\n and so is this.');

// melhorando a sintaxe da saída do console.log
console.log(`You are reading ${book.name}, 
    and this is a new line, 
        and so is this.`);