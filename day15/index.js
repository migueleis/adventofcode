const { demo, entry } = require('./entry');

const analizeDataEntry = (data) => {
    const steps = data.trim().split(',');
    return steps;
}

const getHash = (step) => {
    let value = 0;
    for (let i = 0; i < step.length; i++) {
        value = ((value + step[i].charCodeAt(0)) * 17) % 256;
    }
    return value;
}

const part1 = (data) => {
    const steps = analizeDataEntry(data);
    let total = 0;
    for (const step of steps) {
        let valorAscii = getHash(step);
        total += valorAscii;
    }
    return total;
}

const part2 = (data) => {
    const steps = analizeDataEntry(data);
    let label, lens, hashValue;
    const boxes = Array(256).fill().map(() => []);
    for (const step of steps) {
        if (step.includes("-")) {
            label = step.replace("-", "");
            for (let i = 0; i < boxes.length; i++) {
                for (let j = 0; j < boxes[i].length; j++) {
                    if (boxes[i][j].split(" ")[0] === label) {
                        boxes[i].splice(j, 1)
                    };
                }
            }
        }
        if (step.includes("=")) {
            [label, lens] = step.split("=");
            hashValue = getHash(label);
            const index = boxes[hashValue].findIndex((e) => e.split(" ")[0] === label);
            if (index === -1) {
                boxes[hashValue].push(label + " " + lens);
            } else {
                boxes[hashValue][index] = label + " " + lens;
            }
        }
    }

    const totalPower = boxes.reduce((acc, cur, i) => acc + (i + 1) * cur.reduce((a, c, j) => a + (j + 1) * + c.split(" ")[1], 0), 0)

    return totalPower;
}


inicio = new Date();
console.log("demo part1", part1(demo));
console.log("entry part1", part2(entry));
console.log("demo part2", part2(demo));
console.log("entry part2", part2(entry));
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
//console.log(`Tiempo transcurrido: ${ tiempoTranscurrido } milisegundos`);

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

