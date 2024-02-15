// Escopo de variáveis com let e const
let movie = 'Lord of the Rings';
// var movie = 'Batman vs. Superman'; // vai dar erro, pois movie já foi declarada
function starWarsFan() {
    const movie = 'The Empire Strikes Back';
    return movie;
}

function marvelFan() {
    movie = 'Iron Man';
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if(isFan) {
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }

    phrase = 'For the Alliance!';
    console.log('After if: ' + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();