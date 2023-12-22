const { demo, entry } = require('./entry');

const analizeData = (data) => {
    const input = data.replace(/ /gm, "").split("\n").filter(x => !x.match(/^\s*$/gm));
    let bricks = input.map(x => {
        let raw = x.split("~").map(y => y.split(",").map(z => parseInt(z)));
        return {
            start: { x: raw[0][0], y: raw[0][1], z: raw[0][2] },
            end: { x: raw[1][0], y: raw[1][1], z: raw[1][2] }
        };
    });
    console.log("bricks", bricks)
    return bricks;
}

const letsFall = (bricks, occ) => {
    let step = true;
    while (step) {
        step = false;
        for (let brick of bricks) {
            let fall = true;
            for (let x = brick.start.x; x <= brick.end.x; x++) {
                for (let y = brick.start.y; y <= brick.end.y; y++) {
                    for (let z = brick.start.z; z <= brick.end.z; z++) {
                        if (z - 1 <= 0) {
                            fall = false;
                        } else {
                            let key = `${x},${y},${z - 1}`;
                            if (occ.has(key) && occ.get(key) != brick) {
                                fall = false;
                            }
                        }
                    }
                }
            }
            if (fall) {
                step = true;
                for (let x = brick.start.x; x <= brick.end.x; x++) {
                    for (let y = brick.start.y; y <= brick.end.y; y++) {
                        for (let z = brick.start.z; z <= brick.end.z; z++) {
                            let key = `${x},${y},${z}`;
                            occ.delete(key);
                        }
                    }
                }
                brick.start.z--;
                brick.end.z--;
                for (let x = brick.start.x; x <= brick.end.x; x++) {
                    for (let y = brick.start.y; y <= brick.end.y; y++) {
                        for (let z = brick.start.z; z <= brick.end.z; z++) {
                            let key = `${x},${y},${z}`;
                            occ.set(key, brick);
                        }
                    }
                }
            }

        }
    }
    return occ;
}

const getAboveAndBelow = (bricks, occ) => {
    let above = new Map();
    let below = new Map();
    for (let brick of bricks) {
        above.set(brick, new Set());
        below.set(brick, new Set());
    }
    for (let brick of bricks) {
        for (let x = brick.start.x; x <= brick.end.x; x++) {
            for (let y = brick.start.y; y <= brick.end.y; y++) {
                for (let z = brick.start.z; z <= brick.end.z; z++) {
                    let key = `${x},${y},${z + 1}`;
                    if (occ.has(key)) {
                        let other = occ.get(key);
                        if (other != brick) {
                            above.get(brick).add(other);
                            below.get(other).add(brick);
                        }
                    }
                }
            }
        }
    }
    return [above, below];
}



const getOccupation = (bricks) => {
    let occ = new Map();
    bricks.forEach(b => {
        for (let x = b.start.x; x <= b.end.x; x++) {
            for (let y = b.start.y; y <= b.end.y; y++) {
                for (let z = b.start.z; z <= b.end.z; z++) {
                    let key = `${x},${y},${z}`;
                    if (occ.has(key)) {
                        console.error("overlap");
                    } else {
                        occ.set(key, b);
                    }
                }
            }
        }
    });
    console.log("occ", occ);
    return occ;
}

const part1 = (data) => {
    let solution = 0;
    const bricks = analizeData(data);
    //calculate occupation
    let occ = getOccupation(bricks);
    //lets fall the bricks
    occ = letsFall(bricks, occ);
    //above and below
    const [above, below] = getAboveAndBelow(bricks, occ);
    //save to remove
    for (let brick of bricks) {
        let save = true;
        for (let brickAbove of above.get(brick)) {
            if (below.get(brickAbove).size == 1) {
                save = false;
            }
        }
        if (save) {
            solution++;
        }
    }

    return solution;
}

const part2 = (data) => {
    let solution = 0;
    const bricks = analizeData(data);
    //calculate occupation
    let occ = getOccupation(bricks);
    //lets fall the bricks
    occ = letsFall(bricks, occ);
    //above and below
    const [above, below] = getAboveAndBelow(bricks, occ);
    //number of falls
    for (let brick of bricks) {
        let gone = new Set();
        gone.add(brick);

        let foundNewOne = true;
        while (foundNewOne) {
            foundNewOne = false;
            for (let goneBrick of gone) {
                for (let other of above.get(goneBrick)) {
                    if (!gone.has(other) && Array.from(below.get(other)).every(x => gone.has(x))) {
                        gone.add(other);
                        foundNewOne = true;
                    }
                }
            }
        }
        solution += gone.size - 1;
    }

    return solution;
}


inicio = new Date();
console.log('part1 demo', part1(demo));
console.log('part1 entry', part1(entry));
console.log('part2 demo', part2(demo));
console.log('part2 entry', part2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);