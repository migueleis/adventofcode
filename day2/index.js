const entry = require('./entry');

const limitMap = {
    'red': 12,
    'green': 13,
    'blue': 14,
};

const lines = entry.split('\n');
let total = 0;
lines.forEach((line) => {
    const map = {
        'red': [],
        'green': [],
        'blue': [],
    };
    console.log('line >> ', line);
    const games = line.split(':');
    //console.log('games >> ', games);
    const gameId = games[0];
    const gameValue = parseInt(gameId.split(' ')[1], 10);
    //console.log('gameValue >> ', gameValue);
    //console.log('gameId >> ', gameId);
    const subsets = games[1];
    //console.log('subsets >> ', subsets);
    const sets = subsets.split(';');
    sets.forEach((set) => {
        //console.log('set >> ', set);
        const rounds = set.split(',');
        rounds.forEach(round => {
            const colorValue = round.split(' ');
            //console.log('colorValue >> ', colorValue);
            const color = colorValue[2];
            //console.log('color >> ', color);
            const value = parseInt(colorValue[1], 10);
            //console.log('value >> ', value);
            map[color].push(value);
        })
    })
    console.log('<< reds >> ', map['red']);
    console.log('<< greens >> ', map['green']);
    console.log('<< blues >> ', map['blue']);

    const maxRed = Math.max(...map['red']);
    console.log('<< maxRed >> ', maxRed);
    const maxGreen = Math.max(...map['green']);
    console.log('<< maxGreen >> ', maxGreen);
    const maxBlue = Math.max(...map['blue']);
    console.log('<< maxBlue >> ', maxBlue);
    const potencia = maxBlue * maxGreen * maxRed;
    console.log('<< potencia >> ', potencia);

    total = total + potencia
    console.log('total', total);
});