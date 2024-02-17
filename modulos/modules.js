// Módulos
// importando as funções de calcArea.js
import { circleArea, squareArea } from './calcArea';

// aplicando as funções
console.log(circleArea(2));
console.log(squareArea(3));

// importando a função e renomeando
import { circleArea as circle } from './calcArea';

// aplicando as funções
console.log(circle(2));

// importando as funções renomeadas no arquivo de origem
import { circle, square } from './calcArea';

console.log(square(2));
console.log(circle(4));
