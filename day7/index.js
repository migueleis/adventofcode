const { demo, demo2, entry } = require('./entry');

const mapa = {
    iguales: 6,
    poker: 5,
    full: 4,
    trio: 3,
    dosPares: 2,
    par: 1,
    alta: 0
};


function contarCaracteres(cadena) {
    const frecuencia = {};

    for (const caracter of cadena) {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    return frecuencia;
}

const analizarEntrada = () => {
    const lineas = entry.split('\n');
    const resultado = [[], [], [], [], [], [], []];
    let total = 0;
    lineas.forEach(camelCard => {
        const card = camelCard.trim().split(' ');
        const cadena = card[0];
        const valor = card[1];
        const frecuencia = contarCaracteres(cadena);
        const valoresFrecuencia = Object.values(frecuencia);

        if (valoresFrecuencia.every(count => count === 1)) {
            resultado[0].push({ cadena: cadena, valor: parseInt(valor) });
        } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 1).length === 3) {
            resultado[1].push({ cadena: cadena, valor: parseInt(valor) });
        } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 2).length === 2) {
            resultado[2].push({ cadena: cadena, valor: parseInt(valor) });
        } else if (valoresFrecuencia.includes(3) && !valoresFrecuencia.includes(2)) {
            resultado[3].push({ cadena: cadena, valor: parseInt(valor) });
        } else if (valoresFrecuencia.includes(3) && valoresFrecuencia.includes(2)) {
            resultado[4].push({ cadena: cadena, valor: parseInt(valor) });
        } else if (valoresFrecuencia.includes(4)) {
            resultado[5].push({ cadena: cadena, valor: parseInt(valor) });
        } else {
            resultado[6].push({ cadena: cadena, valor: parseInt(valor) });
        }
    })

    ordenarCadenasPorValores(resultado)

    let indice = 1;
    resultado.forEach(array => {
        array.forEach(cad => {
            total += cad.valor * indice;
            indice++;
        })
    })

    return total;
}


function indiceMejorMano(cadena) {
    // Contar la frecuencia de cada letra en la cadena
    const replaced = cadena.replaceAll('J', '');
    const frecuencia = contarCaracteres(replaced);
    const valoresFrecuencia = Object.values(frecuencia);

    if (replaced.length === 4) {
        if (valoresFrecuencia.every(count => count === 1)) {
            return 1;
        } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 1).length === 2) {
            return 3;
        } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 2).length === 2) {
            return 4;
        } else if (valoresFrecuencia.includes(3)) {
            return 5;
        } else if (valoresFrecuencia.includes(4)) {
            return 6;
        }
    } else if (replaced.length === 3) {
        if (valoresFrecuencia.every(count => count === 1)) {
            return 3;
        } else if (valoresFrecuencia.includes(2)) {
            return 5;
        } else if (valoresFrecuencia.includes(3)) {
            return 6;
        }
    } else if (replaced.length === 2) {
        if (valoresFrecuencia.every(count => count === 1)) {
            return 5;
        } else {
            return 6;
        }
    } else {
        return 6;
    }
}

const analizarEntrada2 = () => {
    const lineas = entry.split('\n');
    const resultado = [[], [], [], [], [], [], []];
    let total = 0;
    lineas.forEach(camelCard => {
        const card = camelCard.trim().split(' ');
        const cadena = card[0];
        const valor = card[1];
        const frecuencia = contarCaracteres(cadena);
        const valoresFrecuencia = Object.values(frecuencia);

        if (cadena.includes('J')) {
            const indice = indiceMejorMano(cadena);
            resultado[indice].push({ cadena: cadena, valor: parseInt(valor) });
        } else {
            if (valoresFrecuencia.every(count => count === 1)) {
                resultado[0].push({ cadena: cadena, valor: parseInt(valor) });
            } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 1).length === 3) {
                resultado[1].push({ cadena: cadena, valor: parseInt(valor) });
            } else if (valoresFrecuencia.includes(2) && valoresFrecuencia.filter(count => count === 2).length === 2) {
                resultado[2].push({ cadena: cadena, valor: parseInt(valor) });
            } else if (valoresFrecuencia.includes(3) && !valoresFrecuencia.includes(2)) {
                resultado[3].push({ cadena: cadena, valor: parseInt(valor) });
            } else if (valoresFrecuencia.includes(3) && valoresFrecuencia.includes(2)) {
                resultado[4].push({ cadena: cadena, valor: parseInt(valor) });
            } else if (valoresFrecuencia.includes(4)) {
                resultado[5].push({ cadena: cadena, valor: parseInt(valor) });
            } else {
                resultado[6].push({ cadena: cadena, valor: parseInt(valor) });
            }
        }

    })

    ordenarCadenasPorValores(resultado)

    let indice = 1;
    resultado.forEach(array => {
        array.forEach(cad => {
            total += cad.valor * indice;
            indice++;
        })
    })

    return total;

}

function ordenarCadenasPorValores(arrays) {
    const orden = "23456789TJQKA";
    const orden2 = "J23456789TQKA";

    arrays.forEach((array, index) => {
        array.sort((a, b) => {
            for (let i = 0; i < Math.min(a.cadena.length, b.cadena.length); i++) {
                const valorA = orden2.indexOf(a.cadena[i]);
                const valorB = orden2.indexOf(b.cadena[i]);

                if (valorA !== valorB) {
                    return valorA - valorB;
                }
            }
            return 0;
        });
    });
}

const calcular = () => {
    return analizarEntrada2();
}


inicio = new Date();
console.log('salida', calcular());
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);


// Ejemplos de uso
const cadenaEjemplo1 = "JJJJJ";
const resultado1 = indiceMejorMano(cadenaEjemplo1);
console.log("6", resultado1);

const cadenaEjemplo4 = "2153J";
const resultado4 = indiceMejorMano(cadenaEjemplo4);
console.log("1", resultado4);

const cadenaEjemplo3 = "2133J";
const resultado3 = indiceMejorMano(cadenaEjemplo3);
console.log("3", resultado3);

const cadenaEjemplo2 = "2233J";
const resultado2 = indiceMejorMano(cadenaEjemplo2);
console.log("4", resultado2);

const cadenaEjemplo5 = "2333J";
const resultado5 = indiceMejorMano(cadenaEjemplo5);
console.log("5", resultado5);

const cadenaEjemplo12 = "AAAAJ";
const resultado12 = indiceMejorMano(cadenaEjemplo12);
console.log("6", resultado12);

const cadenaEjemplo6 = "213JJ";
const resultado6 = indiceMejorMano(cadenaEjemplo6);
console.log("3", resultado6);

const cadenaEjemplo7 = "211JJ";
const resultado7 = indiceMejorMano(cadenaEjemplo7);
console.log("5", resultado7);

const cadenaEjemplo8 = "111JJ";
const resultado8 = indiceMejorMano(cadenaEjemplo8);
console.log("6", resultado8);

const cadenaEjemplo9 = "11JJJ";
const resultado9 = indiceMejorMano(cadenaEjemplo9);
console.log("6", resultado9);

const cadenaEjemplo10 = "12JJJ";
const resultado10 = indiceMejorMano(cadenaEjemplo10);
console.log("5", resultado10);

const cadenaEjemplo11 = "1JJJJ";
const resultado11 = indiceMejorMano(cadenaEjemplo11);
console.log("6", resultado11);


