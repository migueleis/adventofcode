const { demo, entry } = require('./entry');

function shortestPathOnGrid(start, end) {
    const [x1, y1] = start;
    const [x2, y2] = end;

    //this is taxi cab geometry
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const analizarEntrada = () => {
    const grid = entry.split('\n').map((line) => line.split(""));
    console.log('grid', grid);
    //look for empty rows (all .)
    const newRows = [];
    for (const row of grid) {
        if (row.every((seat) => seat === ".")) {
            newRows.push(row);
            newRows.push(row); // add extra
        } else {
            newRows.push(row);
        }
    }
    //look for empty columns (all .)
    const newGrid = new Array(newRows.length).fill(0).map(() => []);

    for (let i = 0; i < newRows[0].length; i++) {
        let allDots = true;
        for (let j = 0; j < newRows.length; j++) {
            if (newRows[j][i] !== ".") {
                allDots = false;
                break;
            }
        }

        if (allDots) {
            for (let j = 0; j < newRows.length; j++) {
                newGrid[j].push(".");
                newGrid[j].push(".");
            }
        } else {
            for (let j = 0; j < newRows.length; j++) {
                newGrid[j].push(newRows[j][i]);
            }
        }
    }
    console.log("newGrid", newGrid);

    const galaxies = []

    //find locatins of all #
    for (let i = 0; i < newGrid[0].length; i++) {
        for (let j = 0; j < newGrid.length; j++) {
            if (newGrid[j][i] === "#") {
                galaxies.push([i, j]);
            }
        }
    }
    console.log("galaxies", galaxies);
    let pathSum = 0;

    //for every pair
    for (let i = 0; i < galaxies.length; i++) {
        for (let j = i + 1; j < galaxies.length; j++) {
            pathSum += shortestPathOnGrid(galaxies[i], galaxies[j]);
        }
    }

    console.log(pathSum);
}

const analizarEntrada2 = () => {
    const grid = entry.split('\n').map((line) => line.split(""));
    console.log('grid', grid);
    const galaxies = []

    //record all psotions of all #
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === "#") {
                galaxies.push([i, j]);
            }
        }
    }

    //look for empty rows
    for (let y = grid.length - 1; y >= 0; y--) {
        let allDots = true;
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] !== ".") {
                allDots = false;
                break;
            }
        }

        if (allDots) {
            //look for all galaxies with a y value greater than y and add 1000000 to their y value
            for (let g = 0; g < galaxies.length; g++) {
                if (galaxies[g][1] > y) {
                    galaxies[g][1] += 1000000 - 1;
                }
            }
        }
    }

    //look for empty columns
    for (let x = grid[0].length - 1; x >= 0; x--) {
        let allDots = true;
        for (let y = 0; y < grid.length; y++) {
            if (grid[y][x] !== ".") {
                allDots = false;
                break;
            }
        }

        if (allDots) {
            //look for all galaxies with a x value greater than x and add 1000000 to their x value
            for (const galaxy of galaxies) {
                if (galaxy[0] > x) {
                    galaxy[0] += 1000000 - 1;
                }
            }
        }
    }

    let pathSum = 0;

    //for every pair
    for (let i = 0; i < galaxies.length; i++) {
        for (let j = i + 1; j < galaxies.length; j++) {
            pathSum += shortestPathOnGrid(galaxies[i], galaxies[j]);
        }
    }

    console.log(pathSum);
}

const calcular = () => {
    analizarEntrada2();

    return 0;
}



inicio = new Date();
console.log('salida', calcular());
//console.log('salida', contarPuntosInternos([ '.', '.', 'F', '7', '.' ]));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

