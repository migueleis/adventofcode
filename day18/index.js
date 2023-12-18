const { demo, entry } = require('./entry');

const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const DNS = ['R', 'D', 'L', 'U'];

function run(data, part2) {
    const lines = data.trim().split('\n');
    let pos = [0, 0];
    const points = [pos];
    let perimeter = 0;

    for (const line of lines) {
        let dir, dist;

        if (part2) {
            const parts = line.split("#")[1].split(")");
            dir = DIRS[parts[0][parts[0].length - 1]];
            dist = parseInt(parts[0].slice(0, -1), 16);
        } else {
            const parts = line.split(" ");
            dir = DIRS[DNS.indexOf(parts[0])];
            dist = parseInt(parts[1]);
        }

        pos = [pos[0] + dir[0] * dist, pos[1] + dir[1] * dist];
        perimeter += dist;
        points.push([...pos]);
    }

    points.reverse();
    let area = 0;

    for (let i = 0; i < points.length - 1; i++) {
        area += (points[i][1] + points[i + 1][1]) * (points[i][0] - points[i + 1][0]);
    }

    const meters = Math.floor(perimeter / 2 + area / 2 + 1);
    return meters;
}

// Fórmula del área de Gauss


inicio = new Date();
console.log("demo part1", run(demo, false));
console.log("entry part1", run(entry, false));
console.log("demo part2", run(demo, true));
console.log("entry part2", run(entry, true));

fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

