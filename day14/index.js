const { demo, entry } = require('./entry');
const crypto = require("crypto");

const analizarEntrada = (data) => {
    const lineas = data.split('\n');
    let patrones = [];
    let patron = [];
    lineas.forEach((linea) => {
        patrones.push(linea.split(''));
    })
    return patrones;
}

const rotarMatrizHaciaDerecha = (matriz) => {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    // Transponer la matriz (intercambiar filas por columnas)
    const transpuesta = [];
    for (let j = 0; j < columnas; j++) {
        transpuesta[j] = [];
        for (let i = 0; i < filas; i++) {
            transpuesta[j][i] = matriz[i][j];
        }
    }
    // Invertir el orden de las columnas
    const resultado = transpuesta.map(fila => fila.reverse());
    return resultado;
}

function moverCerosADerecha(subArray) {
    const newArray = [...subArray];
    const ceros = newArray.filter(char => char === 'O');
    const puntos = newArray.filter(char => char === '.');
    newArray.fill('.', 0, puntos.length); 
    newArray.fill('O', puntos.length, puntos.length + ceros.length); 
    return newArray;
}

const unirPiedras = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const indiceHash = array.indexOf('#');
    if (indiceHash === -1) {
        return moverCerosADerecha(array);
    }
    const parteAnterior = array.slice(0, indiceHash);
    const partePosterior = array.slice(indiceHash + 1);
    const nuevaParteAnterior = moverCerosADerecha(parteAnterior);
    return nuevaParteAnterior.concat('#', unirPiedras(partePosterior));
}

const aplicarGravedadADerecha = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
        newGrid.push(unirPiedras(grid[i]));
    }
    return newGrid;
}

const sumarDeSurANorte = (grid) => {
    //sumo asumiendo que la matriz tiene el norte abajo
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
        const amount = grid[i].filter(c => c === 'O').length;
        sum += amount * (i + 1);
    }

    return sum;
}

const sumarPesoEnNorte = (matriz) => {
    const matrizRotada = rotarMatrizHaciaDerecha(matriz);
    const matrizUnida = aplicarGravedadADerecha(matrizRotada);
    return sumarDeSurANorte(rotarMatrizHaciaDerecha(matrizUnida));
}

const girarCiclo = (matriz) => {
    let matrizCiclo = [...matriz];
    for (let i = 0; i < 4; i++) {
        matrizCiclo = rotarMatrizHaciaDerecha(matrizCiclo);
        matrizCiclo = aplicarGravedadADerecha(matrizCiclo);
    }
    return matrizCiclo;
}

const calcular = (data) => {
    const matriz = analizarEntrada(data);
    const peso = sumarPesoEnNorte(matriz)
    return peso;
}

function hashGrid(grid) {
    const hash = crypto.createHash("sha256");
    return hash.update(grid.map(row => row.join("")).join("\n")).digest("hex");
}

const calcular2 = (data) => {
    const matriz = analizarEntrada(data);
    let matrizCiclo = [...matriz];
    const listaHash = new Set();
    const hashIndice = new Map();
    for (let i = 0; i < 1000000000; i++) {
        matrizCiclo = girarCiclo(matrizCiclo);

        const hash = hashGrid(matrizCiclo);
        if (listaHash.has(hash)) {
            const indiceInicial = hashIndice.get(hash);
            const longitudBucle = i - indiceInicial;

            const restante = 1000000000 - 1 - i;
            const restanteMod = restante % longitudBucle;

            for (let j = 0; j < restanteMod; j++) {
                matrizCiclo = girarCiclo(matrizCiclo);
            }
            break;
        }
        listaHash.add(hash);
        hashIndice.set(hash, i);
    }
  
    //tengo el norte arriba, le doy la vuelta a la matrix antes de sumar
    matrizCiclo = rotarMatrizHaciaDerecha(matrizCiclo)
    matrizCiclo = rotarMatrizHaciaDerecha(matrizCiclo)
    const peso = sumarDeSurANorte(matrizCiclo);
    return peso;
}




inicio = new Date();
console.log("demo part1", calcular(demo));
console.log("entry part1", calcular(entry));
console.log("demo part2", calcular2(demo));
console.log("entry part2", calcular2(entry));
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

