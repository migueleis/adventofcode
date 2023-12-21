const { demo, entry } = require('./entry');

const analizarEntrada = (data) => {
    const lineas = data.split('\n');

    return lineas;
}

const part1 = (data) => {
    const entrada = analizarEntrada(data);
    console.log('entrada', entrada);
    let count = 0;

    return count;
}

const part2 = (data) => {
    const entrada = analizarEntrada(data);
    console.log('entrada', entrada);
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