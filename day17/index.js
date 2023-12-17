const { demo, entry } = require('./entry');

function solve(input) {
    return [process(parse(input), 0, 1), process(parse(input), 1, 1)];
}

function parse(input) {
    return input.split("\n").map((l) => l.split("").map(Number));
}

function process(grid, part) {
    class Grid {
        data = {};

        set(val, x, y = 0, z = 0, zz = 0) {
            if (!this.data[zz]) this.data[zz] = {};
            if (!this.data[zz][z]) this.data[zz][z] = {};
            if (!this.data[zz][z][y]) this.data[zz][z][y] = {};
            this.data[zz][z][y][x] = val;
            this.lastPos = [x, y, z, zz];
            return val;
        }

        get(x, y = 0, z = 0, zz = 0) {
            return this.data[zz]?.[z]?.[y]?.[x];
        }
    }

    const timeSlots = [[]];
    function enqueue(time, x, y, dir, dirDist, prev) {
        if (!timeSlots[time]) timeSlots[time] = [];
        timeSlots[time].push({ x, y, dir, dirDist, prev });
    }

    let curTime = 0;
    enqueue(curTime, 0, 0, -1, part ? 4 : 0, null);

    const visited = new Grid();
    const d = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    main: while (true) {
        while (timeSlots[curTime] && timeSlots[curTime].length) {
            const cur = timeSlots[curTime].pop();

            if (visited.get(cur.x, cur.y, cur.dir, cur.dirDist) !== undefined)
                continue;

            visited.set(cur.prev, cur.x, cur.y, cur.dir, cur.dirDist);

            for (let i = 0; i < 4; i++) {
                const [dx, dy] = d[i];
                if (cur.dir === (i + 2) % 4) continue;
                const turn = i !== cur.dir;
                if (!turn && cur.dirDist >= (part ? 10 : 3)) continue;
                if (part && turn && cur.dirDist < 4) continue;
                if (cur.x === grid[0].length - 1 && cur.y === grid.length - 1)
                    break main;

                const x = cur.x + dx,
                    y = cur.y + dy;
                if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) continue;
                const time = curTime + grid[y][x];
                enqueue(time, x, y, i, turn ? 1 : cur.dirDist + 1, [cur.x, cur.y, cur.dir, cur.dirDist]);
            }
        }
        curTime++;
    }

    return curTime;
}


inicio = new Date();
console.log("demo", solve(demo));
console.log("entry", solve(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

