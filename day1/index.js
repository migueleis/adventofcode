const { demo, demo2, entry } = require('./entry');

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

const getNumberFrom = (str) => {
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
        if (!isNaN(letter)) { //is number
            res += letter;
            currentWord = '';
        } else { //is letter
            currentWord += letter;
            let number = getNumberFrom(currentWord);
            if (number !== null) {
                res += number;
                currentWord = letter; //keep last letter due to 'eightwo' should be 82
            }
        }
    }
    return res;
}

const calculate = (data, part1) => {
    let total = 0;
    const lines = data.split('\n');
    lines.forEach((line) => {
        if (!part1) {
            line = replaceByNumber(line);
        }
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
    });
    return total;
}

console.log("demo part1", calculate(demo, true));
console.log("entry part1", calculate(entry, true));
console.log("demo part2", calculate(demo2, false));
console.log("entry part2", calculate(entry, false));



