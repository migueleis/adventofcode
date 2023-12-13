const { demo, entry } = require('./entry');


const analizarEntrada = () => {
    const lineas = demo.split('\n');
    let patrones = [];
    return patrones;
}



const calcular = () => {
    const patrones = analizarEntrada();
    console.log('patrones', patrones);
    let count = 0;

    return count;
}



inicio = new Date();
console.log('salida', calcular());
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

