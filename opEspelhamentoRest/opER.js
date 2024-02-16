// Opreadores de espelhamento e rest
// Espelhamento - spread operator (...)
let params = [3, 4, 5];
console.log(sum(...params));

// ES5
console.log(sum.apply(undefined, params));

// operador de espelhamento utilizado como parâmetro rest em funções pra substituir arguments
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

// outra sintaxe para a função acima
function restParameterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));