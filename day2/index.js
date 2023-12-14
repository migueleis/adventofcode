const { demo, entry } = require('./entry');

const limitMap = {
    'red': 12,
    'green': 13,
    'blue': 14,
};

const calcular = (data) => {
    const lines = data.split('\n');
    let total = 0;
    lines.forEach((line) => {
        let valid = true;
        const games = line.split(':');
        const gameId = games[0];
        const gameValue = parseInt(gameId.split(' ')[1], 10);
        const subsets = games[1];
        const sets = subsets.split(';');
        for (const set of sets) {
            const rounds = set.split(',');
            for (const round of rounds) {
                const colorValue = round.split(' ');
                const color = colorValue[2];
                const value = parseInt(colorValue[1], 10);
                if (value > limitMap[color]) {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                break;
            }
        }
        if (valid) {
            total += gameValue;
        }
    });
    return total;
}

const calcular2 = (data) => {
    const lines = data.split('\n');
    let total = 0;
    lines.forEach((line) => {
        const map = {
            'red': [],
            'green': [],
            'blue': [],
        };
        const games = line.split(':');
        const gameId = games[0];
        const gameValue = parseInt(gameId.split(' ')[1], 10);
        const subsets = games[1];
        const sets = subsets.split(';');
        sets.forEach((set) => {
            const rounds = set.split(',');
            rounds.forEach(round => {
                const colorValue = round.split(' ');
                const color = colorValue[2];
                const value = parseInt(colorValue[1], 10);
                map[color].push(value);
            })
        })
        const maxRed = Math.max(...map['red']);
        const maxGreen = Math.max(...map['green']);
        const maxBlue = Math.max(...map['blue']);
        const potencia = maxBlue * maxGreen * maxRed;
        total += potencia
    });
    return total;
}


inicio = new Date();
console.log("demo part1", calcular(demo));
console.log("entry part1", calcular(entry));
console.log("demo part2", calcular2(demo));
console.log("entry part2", calcular2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);