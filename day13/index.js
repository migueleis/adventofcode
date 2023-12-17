const { demo, entry } = require('./entry');


const analizarEntrada = () => {
    const lineas = demo.split('\n');
    let patrones = [];
    let patron = [];
    lineas.forEach((linea, index) => {
        if (linea.trim() === '') {
            patrones.push(patron);
            patron = [];
        } else {
            patron.push(linea);
            if (index === lineas.length - 1) {
                patrones.push(patron);
            }
        }
    })
    return patrones;
}

const findHorzReflection = (section) => {
    console.log('section', section);
    let cCount = section[0].length;
    for (let col = 0; col < cCount - 1; col++) {
        let valid = true;
        let l = col;
        let r = col + 1;
        while (l >= 0 && r < cCount) {
            let lCol = section.map((row) => row[l]).join('');
            console.log('lCol', lCol);
            let rCol = section.map((row) => row[r]).join('');
            console.log('rCol', rCol);
            if (lCol !== rCol) {
                valid = false;
                console.log('valid', valid);
                break;
            }
            l--;
            r++;
        }
        if (valid) return col + 1;
    }
    return null;
};

const findVertReflection = (section) => {
    let rCount = section.length;
    for (let row = 0; row < rCount - 1; row++) {
        let valid = true;
        let l = row;
        let r = row + 1;
        while (l >= 0 && r < rCount) {
            let lRow = section[l];
            let rRow = section[r];
            if (lRow !== rRow) {
                valid = false;
                break;
            }
            l--;
            r++;
        }
        if (valid) return (row + 1) * 100;
    }
    return null;
};

const getDiff = (left, right) => {
    let diff = 0
    let i = 0
    while (i < left.length) {
        if (left[i] !== right[i]) diff++
        i++
    }
    return diff
}

const findHorzReflection2 = (section) => {
    console.log('section', section);
    let cCount = section[0].length
    for (let col = 0; col < cCount - 1; col++) {
        let mismatch = 0
        let l = col
        let r = col + 1
        while (l >= 0 && r < cCount) {
            let lCol = section.map((row) => row[l]).join('')
            console.log('lCol', lCol);
            let rCol = section.map((row) => row[r]).join('')
            console.log('rCol', rCol);
            mismatch += getDiff(lCol, rCol)
            console.log('mismatch', mismatch);
            l--
            r++
        }
        if (mismatch === 1) {
            console.log(">>>>found mismatch on col ", col);
            return col + 1;
        }
    }
    return null
}

const findVertReflection2 = (section) => {
    let rCount = section.length
    console.log('section', section);
    for (let row = 0; row < rCount - 1; row++) {
        let mismatch = 0
        let l = row
        let r = row + 1
        while (l >= 0 && r < rCount) {
            let lRow = section[l]
            console.log('lRow', lRow);
            let rRow = section[r]
            console.log('rRow', rRow);
            mismatch += getDiff(lRow, rRow)
            l--
            r++
        }
        if (mismatch === 1) {
            console.log(">>>>found mismatch on row ", row);
            return (row + 1) * 100
        }

    }
    return null
}


const calcular = () => {
    const patrones = analizarEntrada();
    console.log('patrones', patrones);
    let count = 0;
    const part1 = false;
    if (part1) {
        for (let section of patrones) {
            let horz = findHorzReflection(section);
            let vert = findVertReflection(section);
            count += horz ?? vert ?? 0;
        }
    } else {
        for (let section of patrones) {
            let horz = findHorzReflection2(section);
            let vert = findVertReflection2(section);
            count += horz ?? vert ?? 0;
        }
    }
    return count;
}



inicio = new Date();
console.log('salida', calcular());
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

