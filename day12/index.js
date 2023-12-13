const { demo, entry } = require('./entry');


const calculaResortes2 = (linea) => {
    const registro = linea.split(' ');
    //console.log('registro', registro);
    const cadenaEntrada = registro[0];
    //console.log('cadenaEntradaOriginal', cadenaEntrada);
    const salidaEsperada = registro[1].split(',').map(n => parseInt(n));
    //console.log('salidaEsperada', salidaEsperada);
    let nuevaEntrada = cadenaEntrada;
    let nuevaSalidaEsperada = new Array(...salidaEsperada);
    for (let i = 0; i < 4; i++) {
        nuevaEntrada += `?${cadenaEntrada}`;
        nuevaSalidaEsperada.push(...salidaEsperada);
    }
    console.log('nuevaEntrada', nuevaEntrada);
    console.log('nuevaSalidaEsperada', nuevaSalidaEsperada);


    const comb = countWays(nuevaEntrada, nuevaSalidaEsperada);
    console.log('comb', comb);
    return comb;
}

function memoize(func) {
    const stored = new Map();

    return (...args) => {
        const k = JSON.stringify(args);
        if (stored.has(k)) {
            return stored.get(k);
        }
        const result = func(...args);
        stored.set(k, result);
        return result;
    };
}

function sum(...nums) {
    let tot = 0;
    for (const x of nums) {
        if (typeof x === "number") {
            tot += x;
        } else {
            for (const y of x) {
                tot += y;
            }
        }
    }
    return tot;
}

function toInt(x) {
    return parseInt(x, 10);
}

const countWays = memoize((line, runs) => {
    if (line.length === 0) {
        if (runs.length === 0) {
            return 1;
        }
        return 0;
    }
    if (runs.length === 0) {
        for (let i = 0; i < line.length; i++) {
            if (line[i] === "#") {
                return 0;
            }
        }
        return 1;
    }

    if (line.length < sum(runs) + runs.length - 1) {
        // The line is not long enough for all runs
        return 0;
    }

    if (line[0] === ".") {
        return countWays(line.slice(1), runs);
    }
    if (line[0] === "#") {
        const [run, ...leftoverRuns] = runs;
        for (let i = 0; i < run; i++) {
            if (line[i] === ".") {
                return 0;
            }
        }
        if (line[run] === "#") {
            return 0;
        }

        return countWays(line.slice(run + 1), leftoverRuns);
    }
    // Otherwise dunno first spot, pick
    return countWays("#" + line.slice(1), runs) + countWays("." + line.slice(1), runs);
});




const calcular = () => {
    //analizarEntrada();
    const lineas = entry.split('\n');
    let total = 0;
    lineas.forEach(linea => {
        total += calculaResortes2(linea);
    })
    return total;
}



inicio = new Date();
console.log('salida', calcular());
//console.log('salida', contarPuntosInternos([ '.', '.', 'F', '7', '.' ]));
//const cadenaEntrada = '.??..??...?##.';
//const salidaEsperada = [1, 1, 3];
//const resultado = encontrarCombinaciones(cadenaEntrada, salidaEsperada);
//console.log(resultado);
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);


/****************************/
/** Sumar valores del array */
/****************************/
//total.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

/**********************************************/
/** Extraer los numeros separados por espacio */
/**********************************************/
//trim -> quito espacios en blanco al principio y fin
//split /\s+/ -> delimitador es una secuencia de espacios 1 o mas
//map(Number) -> convierto los substring en numeros
//const numerosGanadores = numeros[0].trim().split(/\s+/).map(Number);

/***************************/
/** Compruebo si es numero */
/***************************/
//isNaN(letter) -> true si letter no es un numero

/*******************************/
/** Convertir string en numero */
/*******************************/
//parseInt(str, 10);

/*******************************************************/
/** Función para verificar si un carácter es un dígito */
/*******************************************************/
/* function esDigito(caracter) {
    return /\d/.test(caracter);
}*/

/********************/
/** Calcular tiempo */
/********************/
//const inicio = new Date();
//const fin = new Date();
//const tiempoTranscurrido = fin - inicio;
//console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

/***********************************/
/** Ordenar cadenas por orden dado */
/***********************************/
/*function ordenarCadenasPorValores(arrays) {
    const orden = "23456789TJQKA";
    array.sort((a, b) => {
        for (let i = 0; i < Math.min(a.cadena.length, b.cadena.length); i++) {
            const valorA = orden.indexOf(a.cadena[i]);
            const valorB = orden.indexOf(b.cadena[i]);

            if (valorA !== valorB) {
                return valorA - valorB;
            }
        }
        return 0;
    });
}*/

/********************************** */
/** Contar frecuencia de caracteres */
/********************************** */
/*function contarCaracteres(cadena) {
    const frecuencia = {};

    for (const caracter of cadena) {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    return frecuencia;
}
entrada "AADDFES"
salida { A: 2, D: 2, F: 1, E: 1, S: 1 }
const valoresFrecuencia = Object.values(frecuencia);

valoresFrecuencia.every(count => count === 1)
valoresFrecuencia.includes(2)
valoresFrecuencia.filter(count => count === 1).length === 3
*/

