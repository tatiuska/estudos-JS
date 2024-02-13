// Operadores
var num = 0; // operadores aritméticos
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // operadores de atribuição
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1)); // operadores de atribuição
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // operadores lógicos
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

console.log('5 & 1: ', (5 & 1)); // operador bitwise
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

console.log('typeof num:', typeof num); // operador typeof
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});

// operador delete
var myObj = {name: 'John', age: '21'};
delete myObj.age;
console.log(myObj); // exibe Object {name: "John"}