// Propriedades melhoradas de objetos
// desestruturação de array (ES6)
//let [x, y] = ['a', 'b'];

// equivalente a:
let x = 'a';
let y = 'b';

// fazendo swap (trocando valores de variáveis)
[x, y] = [y, x];

// igual a:
var temp = x;
x = y;
y = temp;

// recurso útil para algoritmos de ordenação

// abreviação de propriedades
let [x, y] = ['a', 'b'];
let obj = {x, y};
console.log(obj);

// outra forma de aplicar a abreviação de propriedades
var x = 'a';
var y = 'b';
var obj2 = {x: x, y: y};
console.log(obj2);

// nomes de métodos abreviados
const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello());