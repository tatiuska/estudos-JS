// Funções de seta
var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2));

// simplificando a sintaxe do código, omitindo a palavra reservada function e usando =>
const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(5));

// omitindo a palavra reservada return e as chaves, usado em casos de funções com uma única instrução
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(8));

// caso a função na receba parâmetros
const hello = () => console.log('hello!');
hello();