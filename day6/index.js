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

let inicio = new Date();
console.log('salida', calcular2());
let fin = new Date();
let tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);