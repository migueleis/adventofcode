const { seeds, mapaSoil, mapaFertilizer, mapaWater, mapaLight, mapaTemp, mapaHum, mapaLoc } = require('./entry');

//const lineas = entry.split('\n');


const calcularLocation = (seed) => {
    let soil = calculaDestino(seed, mapaSoil);
    //console.log('soil', soil);
    let fertilizer = calculaDestino(soil, mapaFertilizer);
    //console.log('fertilizer', fertilizer);
    let water = calculaDestino(fertilizer, mapaWater);
    //console.log('water', water);
    let light = calculaDestino(water, mapaLight);
    //console.log('light', light);
    let temp = calculaDestino(light, mapaTemp);
    //console.log('temp', temp);
    let humidity = calculaDestino(temp, mapaHum);
    //console.log('humidity', humidity);
    let location = calculaDestino(humidity, mapaLoc);
    //console.log('location', location);
    /*if (/*seed === 79 || seed === 14 || seed === 55 || seed == 13 || seed === 82) {
        console.log('>>>>>>seed', seed);
        console.log('soil', soil);
        console.log('fertilizer', fertilizer);
        console.log('water', water);
        console.log('light', light);
        console.log('temp', temp);
        console.log('humidity', humidity);
        console.log('location', location);
    }*/
    return location;
}

const calcular = () => {
    //const inicio = new Date();
    const seedList = seeds.trim().split(/\s+/).map(Number);

    //console.log('seedList', seedList);
    let minLocation = 26714517;
    for (let i = 0; i < seedList.length; i = i + 2) {
        console.log("Processing ", i);
        const init = seedList[i];
        const range = seedList[i + 1];
        //console.log('init', init);
        //console.log('range', range);
        //console.log('end', init + range - 1);

        for (let r = 0; r < range; r++) {
            const location = calcularLocation(init + r);
            minLocation = minLocation < location ? minLocation : location;
        }
        //fin = new Date();
        //tiempoTranscurrido = fin - inicio;

        //console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);
        //console.log('min', minLocation);
    }
    //fin = new Date();
    //tiempoTranscurrido = fin - inicio;

    //console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);
    return minLocation;
}

const calculaDestino = (seed, mapa) => {
    let destino = seed;
    // console.log('valueOrigen', seed);
    mapa.forEach(mapaLine => {
        // console.log('mapLine', mapaLine);
        if (seed >= mapaLine[1] && seed <= mapaLine[3]) {
            // Calcular la posición relativa
            const posicionRelativa = seed - mapaLine[1];
            //console.log('posicionRelativa', posicionRelativa);
            destino = posicionRelativa + mapaLine[0];
            //console.log('destino', destino);
            return;
        }
    });
    //console.log('valueDestino', destino);
    return destino;
    //console.log('valueOrigen', seed);
    /*const lineasMapa = mapa.split('\n');
    let destino = seed;
    lineasMapa.forEach(linea => {
        const values = linea.trim().split(/\s+/).map(Number);

        const initRangeDest = values[0];
        // console.log('initRangeDest', initRangeDest);
        const initRangeOrigen = values[1];
        // console.log('initRangeOrigen', initRangeOrigen);
        const range = values[2];
        // console.log('range', range);
        const posRel = encontrarPosicionEnRango(initRangeOrigen, initRangeOrigen + range, seed);
        // console.log('posRel', posRel);
        if (posRel !== -1) {
            //   console.log('destino', initRangeDest + posRel);
            destino = initRangeDest + posRel;
            return;
        }
    });
    return destino;*/
}

/*function encontrarPosicionEnRango(inicio, fin, valorBuscado) {
    // Verificar si el valor buscado está dentro del rango
    if (valorBuscado >= inicio && valorBuscado <= fin) {
        // Calcular la posición relativa
        const posicionRelativa = valorBuscado - inicio;
        return posicionRelativa;
    } else {
        return -1;
    }
}*/


console.log('minima position', calcular());
/*const sd = 82;
console.log('seed', sd);
const location = calcularLocation(sd);*/
