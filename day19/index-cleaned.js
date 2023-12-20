const { demo, entry } = require('./entry');

const separateEntry = (data) => {
    const pipes = [];
    const entries = [];
    const lines = data.split('\n');
    let isPipes = true;
    for (let line of lines) {
        if (line.trim() === '') {
            isPipes = false;
        } else {
            if (isPipes) {
                pipes.push(line);
            } else {
                entries.push(line);
            }
        }
    }
    return [pipes, entries];
}

const eval = (cond, item) => {
    if (cond.operator === '<') {
        return item[cond.name] < cond.value;
    } else {
        return item[cond.name] > cond.value;
    }
    return entry;
}

const getStatus = (item, wf) => {
    for (let rule of wf.rules) {
        if (rule.cond) {
            if (eval(rule.cond, item)) {
                if (rule.target === 'A') {
                    return [true, false, undefined];
                } else if (rule.target === 'R') {
                    return [false, true, undefined];
                } else {
                    return [false, false, rule.target]
                }
            }
        } else {
            if (rule.target === 'A') {
                return [true, false, undefined];
            } else if (rule.target === 'R') {
                return [false, true, undefined];
            } else {
                return [false, false, rule.target]
            }
        }
    }
}

const parsePipe = (pipe) => {
    const workflow = {};
    workflow.name = pipe.split('{')[0];
    workflow.rules = [];
    const conditions = pipe.split('{')[1].split(',');
    for (let c of conditions) {
        let rule = {};
        if (c.includes('}')) {
            if (c === 'A}') {
                rule.target = 'A';
            } else if (c === 'R}') {
                rule.target = 'R';
            } else {
                rule.target = c.substring(0, c.length - 1)
            }
        } else {
            rule.target = c.split(':')[1];
            const cond = c.split(':')[0];
            rule.cond = {}
            rule.cond.name = cond.substring(0, 1);
            rule.cond.operator = cond.substring(1, 2);
            rule.cond.value = cond.substring(2, cond.length);
        }
        workflow.rules.push(rule);
    }

    return workflow
}

const parseEntry = (entry) => {
    const conditions = entry.substring(1, entry.length - 1).split(',');
    let item = {}
    let totalValue = 0;
    for (let c of conditions) {
        const value = parseInt(c.split('=')[1], 10);
        item[c.split('=')[0]] = value;
        totalValue += value;
    }
    item.value = totalValue;
    return item;
}



const getItems = (entries) => {
    const items = [];
    for (let entry of entries) {
        items.push(parseEntry(entry));
    }
    return items;
}

const getWorkflows = (pipes) => {
    const workflows = [];
    for (let pipe of pipes) {
        workflows.push(parsePipe(pipe));
    }
    return workflows;
}

const run = (data) => {
    const [pipes, entries] = separateEntry(data);
    const items = getItems(entries);
    const workflows = getWorkflows(pipes);
    const entriesAccepted = [];
    const initWorkflow = workflows.find(w => w.name === 'in');
    for (let item of items) {
        let accepted = false, rejected = false, nextWF = initWorkflow;
        while (accepted === false && rejected === false) {
            [accepted, rejected, wfName] = getStatus(item, nextWF);
            if (accepted) {
                entriesAccepted.push(item);
            } else {
                nextWF = workflows.find(w => w.name === wfName);
            }
        }
    }
    const total = entriesAccepted.reduce((acc, cur) => acc + cur.value, 0);
    return total;
}

inicio = new Date();
console.log("demo part1", run(demo));
console.log("entry part1", run(entry));
//console.log("demo part2", run(demo, true));
//console.log("entry part2", run(entry, true));

fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);
