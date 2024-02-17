// Operador de exponencial
// criando variável r para testar os exemplos
let r = 2;

const area = 3.14 * r * r;

// utilizando a função Math.pow
const area = 3.14 * Math.pow(r, 2);
console.log(area);

// outro modeo de escrever, com o operador ** introduzido na ES2016
const area = 3.14 * (r ** 2);
console.log(area);