const { time, distance } = require('./entry');

//const lineas = entry.split('\n');

const calcular = () => {
    const races = [];
    const tiempos = time.trim().split(/\s+/).map(Number);
    console.log('tiempos', tiempos);
    const distancias = distance.trim().split(/\s+/).map(Number);
    console.log('distancias', distancias);
    for (let i = 0; i < tiempos.length; i++) {
        const limit = distancias[i];
        const tiempo = tiempos[i];
        console.log('limit-tiempo', limit, tiempo);
        let count = 0;
        for (let t = 0; t < tiempo; t++) {
            const distancia = t * (tiempo - t);
            console.log('distancia', distancia);
            if (distancia > limit) {
                count++;
                console.log('count', count);
            }
        }
        races.push(count);
    }
    const resultadoMultiplicacion = races.reduce((acumulador, valor) => acumulador * valor, 1);

    return resultadoMultiplicacion;
}

const calcular2 = () => {
    // Eliminar espacios
    const timeSinEspacios = time.replace(/\s/g, '');
    const distanceSinEspacios = distance.replace(/\s/g, '');

    // Convertir la cadena en un número
    const tiempo = parseInt(timeSinEspacios, 10);
    const limit = parseInt(distanceSinEspacios, 10);

    console.log('limit-tiempo', limit, tiempo);
    let count = 0;
    for (let t = 0; t < tiempo; t++) {
        const distancia = t * (tiempo - t);
        //console.log('distancia', distancia);
        if (distancia > limit) {
            count++;
            //console.log('count', count);
        }
    }


    return count;
}


function contarCombinacionesMayoresQueX(targetSum, limite) {
    let contador = 0;

    for (let num1 = 1; num1 <= targetSum / 2; num1++) {
        const num2 = targetSum - num1;

        if (num2 >= num1 && num2 > limite) {
            contador++;
        }
    }

    return contador;
}

let inicio = new Date();
console.log(contarCombinacionesMayoresQueX(71530, 940200));
let fin = new Date();
let tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);



inicio = new Date();
console.log('salida', calcular2());
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);


/** Sumar valores del array */
/****************************/
//total.reduce((acumulador, valorActual) => acumulador + valorActual, 0);


/** Extraer los numeros separados por espacio */
/**********************************************/
//trim -> quito espacios en blanco al principio y fin
//split /\s+/ -> delimitador es una secuencia de espacios 1 o mas
//map(Number) -> convierto los substring en numeros
//const numerosGanadores = numeros[0].trim().split(/\s+/).map(Number);


/** Compruebo si es numero */
/***************************/
//isNaN(letter) -> true si letter no es un numero


/** Convertir string en numero */
/*******************************/
//parseInt(str, 10);


/** Función para verificar si un carácter es un dígito */
/*******************************************************/
/* function esDigito(caracter) {
    return /\d/.test(caracter);
}*/


/** Calcular tiempo */
/********************/
//const inicio = new Date();
//const fin = new Date();
//const tiempoTranscurrido = fin - inicio;
//console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);