const entry = require('./entry');

const lineas = entry.split('\n');

const numerosCoincidentes = (linea) => {
    const premios = [];
    //console.log("linea:", linea);
    const tarjeta = linea.split(':');
    //console.log("tarjeta number:", tarjeta[0]);
    //console.log("numeros:", tarjeta[1]);
    const numeros = tarjeta[1].split('|');
    //console.log("numerosGanadores:", numeros[0]);
    // console.log("numerosJugados:", numeros[1]);
    const numerosGanadores = numeros[0].trim().split(/\s+/).map(Number);
    const numerosJugados = numeros[1].trim().split(/\s+/).map(Number);
    numerosGanadores.forEach(numg => {
        //console.log("num:", numg);
        numerosJugados.forEach(numj => {
            //console.log("num:", numj);
            if (numg === numj) {
                premios.push(numg);
            }
        })
    })
    //console.log("premios:", premios);
    const aciertos = premios.length;
   // console.log("aciertos:", aciertos);
    return aciertos;
}

const calcularPuntos = (lineas) => {
    let total = new Array(198).fill(1);

    // lineas.forEach(linea => {
    for (let i = 0; i < lineas.length; i++) {
        for (let cards = 0; cards < total[i]; cards++) {
            let aciertos = numerosCoincidentes(lineas[i]);
            while (aciertos > 0) {
                total[i + aciertos] += 1;
                aciertos--;
            }
           // console.log("total:", total);
        }
    }

    const suma = total.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log("suma:", suma);
    return suma;
}




console.log('total', calcularPuntos(lineas));