const entry = require('./entry');

const lines = entry.split('\n');

const map = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};

function getNumberFrom(str) {
    for (const letter in map) {
        if (str.includes(letter)) {
            return map[letter];
        }
    }
    return null;
}

const replaceByNumber = (str) => {
    let res = '';
    let currentWord = '';

    for (const letter of str) {
        if (!isNaN(letter)) { //es un numero
            res += letter;
            currentWord = '';
        } else {
            currentWord += letter;
            let number = getNumberFrom(currentWord);
            if (number !== null) {
                res += number;
                currentWord = letter;
            }
        }
    }
    return res;
}



let total = 0;
lines.forEach((line) => {
    console.log('lineBefore', line);
    line = replaceByNumber(line);
    console.log('line', line);
    let number;
    let first;
    let second;
    for (let i = 0; i < line.length; i++) {
        const letter = line[i];
        if (!isNaN(letter)) {
            if (first === undefined) {
                first = letter;
                second = letter;
            } else {
                second = letter;
            }
        }
    }
    number = parseInt(`${first}${second}`, 10);
    total = total + number;
    console.log('number', number);
    console.log('total', total);
});