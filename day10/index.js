const { demo, demo2, entry } = require('./entry');

const analizarEntrada = () => {
    const mapa = entry.split('\n').map(linea => {
        return linea.split('');
    });
    console.log('mapa', mapa);
    return mapa;
}

const buscaInicial = (mapa) => {
    for (let i = 0; i < mapa.length; i++) {
        const j = mapa[i].indexOf('S');
        if (j !== -1) {
            // Se encontró el carácter, devuelve las posiciones i y j
            return { i, j };
        }
    }
    return {};
}

const iniciaMapaHuecos = (mapa) => {
    const mapaHuecos = [];
    for (let i = 0; i < mapa.length; i++) {
        const fila = [];
        for (let j = 0; j < mapa[0].length; j++) {
            fila.push('.');
        }
        mapaHuecos.push(fila);
    }
    return mapaHuecos;
}

const calcular2 = () => {
    const mapa = analizarEntrada();
    let { i, j } = buscaInicial(mapa);
    let mmap = [];
    for (let y = 0; y < mapa.length * 3; y++) {
        mmap[y] = [];
        for (let x = 0; x < mapa[0].length * 3; x++) {
            mmap[y][x] = ".";
        }
    }
    console.log('mmap', mmap);
    let start = [];
    for (let y in mapa) {
        if (mapa[y].indexOf("S") >= 0) {
            start = [+y, mapa[y].indexOf("S")];
        }
    }
    let dx = 0;
    let dy = 1;
    let py = start[0];
    let px = start[1];
    let steps = 0;
    do {
        steps++;
        px += dx;
        py += dy;

        let c = mapa[py][px];
        mmap[3 * py + 1][3 * px + 1] = '#'
        mmap[3 * py + 1 - dy][3 * px + 1 - dx] = '#'
        if (c == 'J' || c == 'F') {
            [dx, dy] = [-dy, -dx]
        } else if (c == '7' || c == 'L') {
            [dx, dy] = [dy, dx];
        }
        mmap[3 * py + 1 + dy][3 * px + 1 + dx] = '#'

        if (steps > 100000) return "too many steps";
    } while (py != start[0] || px != start[1]);
    console.log('mmap', mmap);
    console.log(steps / 2)
    //console.log(mmap.map(x=>x.join("")).join("\n"));

    //bfs from corner to find all outside spots
    let queue = [[0, 0]];
    while (queue.length > 0) {
        let [cy, cx] = queue.pop();
        mmap[cy][cx] = " "

        if (cy > 0 && mmap[cy - 1][cx] == '.') queue.push([cy - 1, cx]);
        if (cx > 0 && mmap[cy][cx - 1] == '.') queue.push([cy, cx - 1]);
        if (cy < mmap.length - 1 && mmap[cy + 1][cx] == '.') queue.push([cy + 1, cx]);
        if (cx < mmap[0].length - 1 && mmap[cy][cx + 1] == '.') queue.push([cy, cx + 1]);
    }
    //console.log(mmap.map(x=>x.join("")).join("\n"));

    let ret = 0;
    for (let y = 1; y < mmap.length; y += 3) {
        for (let x = 1; x < mmap[0].length; x += 3) {
            if (mmap[y][x] == '.') ret++;
        }
    }
    return ret;
}

const nextStep = (dir, x, y, mapa) => {
    let deltaX = 0;
    let deltaY = 0;
    //console.log(x, y, dir);
    //console.log("nextStep", mapa[y][x] + dir);
    switch (mapa[y][x] + dir) {
        case '|S':
            deltaY = 1;
            break;
        case '|N':
            deltaY = -1;
            break;
        case '-E':
            deltaX = 1;
            break;
        case '-W':
            deltaX = -1;
            break;
        case 'LS':
            deltaX = 1;
            break;
        case 'LW':
            deltaY = -1;
            break;
        case 'JS':
            deltaX = -1;
            break;
        case 'JE':
            deltaY = -1;
            break;
        case '7N':
            deltaX = -1;
            break;
        case '7E':
            deltaY = 1;
            break;
        case 'FN':
            deltaX = 1;
            break;
        case 'FW':
            deltaY = 1;
            break;
        default:
            throw 'unrecognized ' + mapa[y][x] + dir;
    }
    if (deltaY === 1) {
        dir = 'S';
    }
    else if (deltaY === -1) {
        dir = 'N';
    }
    else if (deltaX === -1) {
        dir = 'W';
    }
    else {
        dir = 'E';
    }
    x += deltaX;
    y += deltaY;
    return ({ dir, x, y })
}


const calcular = () => {
    const mapa = analizarEntrada();
    let { i, j } = buscaInicial(mapa);
    let y = i + 1;
    let x = j;
    let path = [{ x: 1, y: 1 }, { x, y }];
    let steps = 1;
    let dir = 'S';
    while (mapa[y][x] !== 'S') {
        ({ dir, x, y } = nextStep(dir, x, y, mapa));
        steps++;
        path.push({ x, y });
    }
    //console.log(path);
    //console.log(steps / 2);
    return 0;
}

const borraPuntosExternos = (mapa) => {
    const cola = [];
    if (mapa[0][0] === '.') {
        cola.push([0, 0]);
    }
    if (mapa[mapa.length - 1][0] === '.') {
        cola.push([mapa.length - 1, 0]);
    }
    if (mapa[0][mapa[0].length - 1] === '.') {
        cola.push([0, mapa[0].length - 1]);
    }
    if (mapa[mapa.length - 1][mapa[0].length - 1] === '.') {
        cola.push([mapa.length - 1, mapa[0].length - 1]);
    }
    while (cola.length > 0) {
        let [i, j] = cola.pop();
        console.log(i, j);
        mapa[i][j] = 'Q';
        if (i > 0 && mapa[i - 1][j] === '.') {
            cola.push([i - 1, j]);
        };
        if (i < mapa.length - 1 && mapa[i + 1][j] === '.') {
            cola.push([i + 1, j]);
        }
        if (j > 0 && mapa[i][j - 1] === '.') {
            cola.push([i, j - 1]);
        }
        if (j < mapa[0].length - 1 && mapa[i][j + 1] === '.') {
            cola.push([i, j + 1]);
        }
    }
    return mapa;
}

function contarElementosConPunto(array) {
    // Filtra los elementos que contienen '.'
    //const elementosConPunto = array.filter(elemento => elemento.includes('.'));
    let puntos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '.') {
            if ((array.slice(0, i).filter(e => e !== '-').length) % 2 !== 0) {
                puntos++;
            }
        }
    }

    // Devuelve la cantidad de elementos que contienen '.'
    return puntos;
}


const calcular3 = () => {
    const mapa = analizarEntrada();
    const mapaH = iniciaMapaHuecos(mapa);
    console.log('mapa', mapa)
    console.log('mapaH', mapaH);
    let { i, j } = buscaInicial(mapa);
    mapaH[i][j] = 'S';
    let y = i + 1;
    let x = j;
    mapaH[y][x] = mapaH[y][x];
    let path = [{ x: 1, y: 1 }, { x, y }];
    let steps = 1;
    let dir = 'S';
    while (mapa[y][x] !== 'S') {
        ({ dir, x, y } = nextStep(dir, x, y, mapa));
        mapaH[y][x] = mapa[y][x];
        steps++;
        path.push({ x, y });
    }
    console.log('mapaH', mapaH);
    const mapaSinExt = borraPuntosExternos(mapaH);
    console.log('mapaSinExt', mapaSinExt)
    let puntos = 0;
    mapaSinExt.forEach(row => {
        puntos += contarElementosConPunto(row);
        console.log(puntos);
    })
    //console.log(path);
    //console.log(steps / 2);
    return puntos;
}



inicio = new Date();
console.log('salida', calcular3());
//console.log('salida', contarPuntosInternos([ '.', '.', 'F', '7', '.' ]));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);
