const { input } = require('./entry');

function solve(input) {
    //console.log('input', input);
    return [process0(...parse(input)), process1(...parse(input))];
}

function parse(input) {
    let [instr, _map] = input.split("\n\n");
    instr = instr.split("");
    _map = _map.split("\n").map((e) => e.split(" = "));
    const map = {};
    for (let i = 0; i < _map.length; i++)
        map[_map[i][0]] = _map[i][1].replace(/[\(\)]/g, "").split(", ");
    return [instr, map];
}

function process0(instr, map) {
    let step = 0;
    let pos = "AAA";
    while (pos !== "ZZZ")
        (pos = map[pos][instr[step % instr.length] === "L" ? 0 : 1]), step++;
    return step;
}

function process1(instr, map) {
    let step = 0;
    let pos = [...Object.keys(map)].filter((e) => e[2] === "A");
    while (pos.some((e) => typeof e !== "number")) {
        for (let i = 0; i < pos.length; i++) {
            if (pos[i][2] === "Z") pos[i] = step;
            if (typeof pos[i] === "number") continue;
            pos[i] = map[pos[i]][instr[step % instr.length] === "L" ? 0 : 1];
        }
        step++;
    }
    return pos.reduce((acc, cur) => lcm(acc, cur), 1);
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

function gcd(a, b) {
    var t = 0;
    a < b && ((t = b), (b = a), (a = t));
    t = a % b;
    return t ? gcd(b, t) : b;
}

console.log(solve(input));