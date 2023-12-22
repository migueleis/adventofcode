const { demo, entry } = require('./entry');

const analyzeData = (data) => {
    const lines = data.split('\n');

    return lines;
}

const part1 = (data) => {
    const input = analyzeData(data);
    console.log('input', input);
    let count = 0;

    return count;
}

const part2 = (data) => {
    const input = analyzeData(data);
    console.log('input', input);
    let count = 0;

    return count;
}


inicio = new Date();
console.log('part1 demo', part1(demo));
//console.log('part1 entry', part1(entry));
//console.log('part2 demo', part2(demo));
//console.log('part2 entry', part2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);