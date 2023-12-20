const { demo, entry } = require('./entry');

const numerosCoincidentes = (linea) => {
    const premios = [];
    const tarjeta = linea.split(':');
    const numeros = tarjeta[1].split('|');
    const numerosGanadores = numeros[0].trim().split(/\s+/).map(Number);
    const numerosJugados = numeros[1].trim().split(/\s+/).map(Number);
    numerosGanadores.forEach(numg => {
        numerosJugados.forEach(numj => {
            if (numg === numj) {
                premios.push(numg);
            }
        })
    })
    const aciertos = premios.length;
    return aciertos;
}

const part2 = (lineas) => {
    let total = new Array(198).fill(1);
    for (let i = 0; i < lineas.length; i++) {
        for (let cards = 0; cards < total[i]; cards++) {
            let aciertos = numerosCoincidentes(lineas[i]);
            while (aciertos > 0) {
                total[i + aciertos] += 1;
                aciertos--;
            }
        }
    }
    const suma = total.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma;
}

const part1 = (lineas) => {
    let total = 0;
    for (let i = 0; i < lineas.length; i++) {
        let aciertos = numerosCoincidentes(lineas[i]);
        if(aciertos>0){
            const cardValue = aciertos === 1 ? 1 : Math.pow(2, aciertos - 1);
            total += cardValue;
        }
    }
    return total;
}



const lineas = entry.split('\n');
console.log('part1', part1(lineas));
console.log('part2', part2(lineas));