// Let e Const no lugar de Var
var framework = 'Angular';
var framework = 'React';
console.log(framework);

// usando let (ES2015)
let language = 'JavaScript';
let language = 'Ruby'; // lança um erro porque a variável language já foi declarada
console.log(language); 

// Const
const PI = 3.141593;
PI = 3.0;
console.log(PI);

// Declarando um objeto const
const jsFramework = {
    name: 'Angular'
};

jsFramework.name = 'React';
console.log(jsFramework); // a saída será React porque no contexto de um objeto, const pode receber novos valores, mas o endereço de memória não pode ser alterado

// tentando atribuir uma nova referência à jsFramework, que resultará em erro
jsFramework = {
    name: 'Vue'
};
console.log(jsFramework);