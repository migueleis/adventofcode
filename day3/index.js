const {demo, entry} = require('./entry');




function encontrarNumerosAdyacentes(lineas) {
    let total = 0;

    // Función para encontrar números adyacentes a un carácter
    /*function encontrarNumerosDesdePosicion(i, j, caracter) {
        let numero = caracter;

        // Verificar el caracter a la izquierda
        for (let k = j - 1; k >= 0 && /\d/.test(lineas[i][k]); k--) {
            numero = lineas[i][k] + numero;
        }

        // Verificar el caracter a la derecha
        for (let k = j + 1; k < lineas[i].length && /\d/.test(lineas[i][k]); k++) {
            numero = numero + lineas[i][k];
        }

        // Verificar el caracter arriba
        for (let k = i - 1; k >= 0 && /\d/.test(lineas[k][j]); k--) {
            numero = lineas[k][j] + numero;
        }

        // Verificar el caracter abajo
        for (let k = i + 1; k < lineas.length && /\d/.test(lineas[k][j]); k++) {
            numero = numero + lineas[k][j];
        }

        return numero;
    }*/

    function encontrarNumerosDesdePosicion(i, j) {
        const numerosEncontrados = new Set();

        // Función para verificar si un carácter es un dígito
        function esDigito(caracter) {
            return /\d/.test(caracter);
        }

        // Iterar sobre las filas desde i-1 hasta i+1
        for (let k = i - 1; k <= i + 1 && k < lineas.length; k++) {
            // Iterar sobre las columnas desde j-1 hasta j+1
            for (let l = j - 1; l <= j + 1 && l < lineas[k].length; l++) {
                // Verificar si el carácter es un dígito
                if (esDigito(lineas[k][l])) {
                    let numero = lineas[k][l];

                    // Buscar hacia la izquierda
                    for (let m = l - 1; m >= 0 && esDigito(lineas[k][m]); m--) {
                        numero = lineas[k][m] + numero;
                    }

                    // Buscar hacia la derecha
                    for (let m = l + 1; m < lineas[k].length && esDigito(lineas[k][m]); m++) {
                        numero = numero + lineas[k][m];
                    }

                    // Agregar el número encontrado a la lista
                    numerosEncontrados.add(numero);
                }
            }
        }

        return numerosEncontrados;
    }

    // Iterar sobre cada línea
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i];

        // Iterar sobre cada caracter de la línea
        for (let j = 0; j < linea.length; j++) {
            const caracter = linea[j];

            // Verificar si el caracter no es un punto ni un numero
            if (caracter !== '.' && isNaN(caracter)) {
                console.log("Found symbol in pos", caracter, i, j);
                const numerosEncontrados = encontrarNumerosDesdePosicion(i, j);
                console.log("numeros adyacentes", numerosEncontrados);
                // Agregar a la lista final si se encontró algún número adyacente
                if (caracter === '*' && numerosEncontrados.size === 2) {
                    const numeros = Array.from(numerosEncontrados);
                    const engranaje = parseInt(numeros[0], 10) * parseInt(numeros[1], 10);
                    console.log("engranaje", engranaje);
                    total += engranaje;
                } /*else {
                    for (const number of numerosEncontrados) {
                        total += parseInt(number, 10);
                    }
                }*/

            }
        }
    }

    return total;
}

const lineas = entry.split('\n');
console.log(encontrarNumerosAdyacentes(lineas));

inicio = new Date();
console.log("demo part1", calcular(demo));
//console.log("entry part1", calcular(entry));
//console.log("demo part2", calcular2(demo));
//console.log("entry part2", calcular2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

/*let total = 0;
let firstLine = lines[0];
for (let i = 1; i < lines.length; i++) {

    const secondLine = lines[i];
    console.log('firstLine >> ', firstLine);
    console.log('secondLine >> ', secondLine);
    firstLine = secondLine;

}*/
