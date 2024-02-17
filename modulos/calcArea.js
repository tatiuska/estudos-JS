// Funções para calcular a área de formas geométricas
const circleArea = r => 3.14 * (r **2);
const squareArea = s => s * s;
export { circleArea, squareArea }; // assim outros arquivos podem importar essas funções

// renomeando as funções antes de exportar
export { circleArea as circle, squareArea as square };

// também é possível utilizar a palavra reservada export na frente de uma função
export const circleArea = r => 3.14 * (r ** 2);
export const squareArea = s => s * s;
