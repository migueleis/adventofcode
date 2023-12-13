const { demo, entry } = require('./entry');



const calculaResortes = (linea) => {
    const registro = linea.split(' ');
    console.log('registro', registro);
    const cadenaEntrada = registro[0];
    console.log('cadenaEntradaOriginal', cadenaEntrada);
    const salidaEsperada = registro[1].split(',').map(n => parseInt(n));
    console.log('salidaEsperada', salidaEsperada);
    const comb = encontrarCombinaciones(cadenaEntrada, salidaEsperada);
    console.log('comb', comb);
    return comb;
}

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


    const comb = recursive_arrangements(nuevaEntrada, nuevaSalidaEsperada);
    console.log('comb', comb);
    return comb;
}

const recursive_arrangements = (entrada, salida) => {
    if (entrada.length === 0) {
        return salida.length === 0 ? 0 : 1;
    }

    if (entrada.indexOf(".") === 0) {
        return recursive_arrangements(entrada.replaceAll('.', ''), salida);
    }
    if (entrada.indexOf("?") === 0) {
        return recursive_arrangements(entrada.replace("?", "."), salida) + recursive_arrangements(entrada.replace("?", "#"), salida)
    }
    if (entrada.indexOf("#") === 0) {
        if (salida.length === 0) {
            return 0;
        }
        if (entrada.length < salida[0]) {
            return 0;
        }

        if (entrada.slice(0, salida[0]).includes(".")) {
            // e.g. "##.???" (3,1)
            return 0;
        }
        if (salida.length > 1) {
            if (entrada.length < salida[0] + 1 || entrada[salida[0]] === "#") {
                return 0;
            }
            // e.g. "##.???" (2,1)
            // -> "???" (1,)
            return recursive_arrangements(entrada.slice(salida[0] + 1), salida.slice(1));
        } else {
            // e.g. "##.???" (2,)
            // -> ".???" (,)
            return recursive_arrangements(entrada.slice(salida[0]), salida.slice(1));
        }
    }
}


function contarNumerosConsecutivos(cadena) {
    // Utilizamos una expresión regular para encontrar secuencias de "#" consecutivos
    const regex = /#+/g;

    // Usamos match para encontrar todas las ocurrencias de la expresión regular en la cadena
    const matches = cadena.match(regex);

    // Si no se encuentran coincidencias, retornamos un arreglo vacío
    if (!matches) {
        return [];
    }

    // Usamos map para obtener la longitud de cada coincidencia (número de "#" consecutivos)
    const longitudes = matches.map(match => match.length);

    return longitudes;
}

function encontrarCombinaciones(input, salidaEsperada) {
    const cantidadInterrogaciones = (input.match(/\?/g) || []).length;
    const combinaciones = generarCombinaciones(cantidadInterrogaciones);
    const soluciones = [];

    for (const combinacion of combinaciones) {
        const cadenaReemplazada = reemplazarInterrogaciones(input, combinacion);
        const resultado = contarNumerosConsecutivos(cadenaReemplazada);

        if (JSON.stringify(resultado) === JSON.stringify(salidaEsperada)) {
            soluciones.push(cadenaReemplazada);
        }
    }

    return soluciones.length;
}

function generarCombinaciones(n) {
    const combinaciones = [];

    for (let i = 0; i < Math.pow(2, n); i++) {
        const binario = i.toString(2).padStart(n, '0');
        const combinacion = binario.split('').map(bit => (bit === '0' ? '.' : '#'));
        combinaciones.push(combinacion);
    }

    return combinaciones;
}

function reemplazarInterrogaciones(cadena, combinacion) {
    let resultado = cadena;
    combinacion.forEach((reemplazo, index) => {
        resultado = resultado.replace('?', reemplazo);
    });
    return resultado;
}


const calcular = () => {
    //analizarEntrada();
    const lineas = demo.split('\n');
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

