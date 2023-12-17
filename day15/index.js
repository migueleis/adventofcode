const { demo, entry } = require('./entry');

const analizeDataEntry = (data) => {
    const steps = data.trim().split(',');
    return steps;
}

const getHash = (step) => {
    let value = 0;
    for (let i = 0; i < step.length; i++) {
        value = ((value + step[i].charCodeAt(0)) * 17) % 256;
    }
    return value;
}

const part1 = (data) => {
    const steps = analizeDataEntry(data);
    let total = 0;
    for (const step of steps) {
        let valorAscii = getHash(step);
        total += valorAscii;
    }
    return total;
}

const part2 = (data) => {
    const steps = analizeDataEntry(data);
    let label, lens, hashValue;
    const boxes = Array(256).fill().map(() => []);
    for (const step of steps) {
        if (step.includes("-")) {
            label = step.replace("-", "");
            for (let i = 0; i < boxes.length; i++) {
                for (let j = 0; j < boxes[i].length; j++) {
                    if (boxes[i][j].split(" ")[0] === label) {
                        boxes[i].splice(j, 1)
                    };
                }
            }
        }
        if (step.includes("=")) {
            [label, lens] = step.split("=");
            hashValue = getHash(label);
            const index = boxes[hashValue].findIndex((e) => e.split(" ")[0] === label);
            if (index === -1) {
                boxes[hashValue].push(label + " " + lens);
            } else {
                boxes[hashValue][index] = label + " " + lens;
            }
        }
    }

    const totalPower = boxes.reduce((acc, cur, i) => acc + (i + 1) * cur.reduce((a, c, j) => a + (j + 1) * + c.split(" ")[1], 0), 0)

    return totalPower;
}


inicio = new Date();
console.log("demo part1", part1(demo));
console.log("entry part1", part2(entry));
console.log("demo part2", part2(demo));
console.log("entry part2", part2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);
