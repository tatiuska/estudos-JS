// Funções
// Sintaxe básica
function sayHello() {
    console.log('Hello!');
}

// Chamando a função
sayHello();

// passando argumentos para uma função
function output(text) {
    console.log(text);
}

// chamando a função
output('Ola!');
output('Hello!', 'Ciao!'); // apenas o primeiro argumento será usado pela função, o segundo será ignorado