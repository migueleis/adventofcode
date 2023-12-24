const { demo, entry } = require('./entry');
const { init } = require('z3-solver');



const analyzeData = (data) => {
  const positions = [];
  const velocities = [];
  data.split('\n').map(line => {
    positions.push(line.split('@')[0].split(',').map(Number));
    velocities.push(line.split('@')[1].split(',').map(Number))
  });
  //console.log('positions', positions);
  //console.log('velocities', velocities);
  return [positions, velocities];
}

const analyzeData2 = (data) => {
  const res = [];
  data.split('\n').map(line => {
    res.push(line.split('@')[0].split(',').map(Number).concat(line.split('@')[1].split(',').map(Number)));
  });
  //console.log('res', res);
  return res;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  var ua, ub, denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  if (denom == 0) return null;
  ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
  ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
  return {
    x: x1 + ua * (x2 - x1),
    y: y1 + ua * (y2 - y1)
  };
}

const isIntersection = (posA, velA, posB, velB, min, max) => {
  let x1 = posA[0];
  let x2 = velA[0] + x1;
  let x3 = posB[0];
  let x4 = velB[0] + x3;
  let y1 = posA[1];
  let y2 = velA[1] + y1;
  let y3 = posB[1];
  let y4 = velB[1] + y3;
  let intersection = intersect(x1, y1, x2, y2, x3, y3, x4, y4);
  if (intersection) {
    let x = intersection['x'];
    let y = intersection['y'];
    if (x > x1 == x2 - x1 > 0 && y > y1 == y2 - y1 > 0 && x > x3 == x4 - x3 > 0 && y > y3 == y4 - y3 > 0 && x >= min && x <= max && y >= min && y <= max) {
      //console.log("posA", posA);
      //console.log("posB", posB);
      return true;
    }
  }
  return false;
}

const part1 = (data, min, max) => {
  const [positions, velocities] = analyzeData(data);
  let count = 0;
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (j !== i) {
        if (isIntersection(positions[i], velocities[i], positions[j], velocities[j], min, max)) {
          count++;
        }
      }
    }
  }
  return count;
}

const part2 = async (dataMap) => {
  const data = analyzeData2(dataMap);
  const { Context } = await init();
  const { Solver, Int } = new Context('main');
  const solver = new Solver();
  const x = Int.const('x');
  const y = Int.const('y');
  const z = Int.const('z');
  const dx = Int.const('dx');
  const dy = Int.const('dy');
  const dz = Int.const('dz');
  const t = data.map((_, i) => Int.const(`t${i}`))

  for (let i = 0; i < 3; i++) {
    const h = data[i];
    solver.add(t[i].mul(h[3]).add(h[0]).sub(x).sub(t[i].mul(dx)).eq(0));
    solver.add(t[i].mul(h[4]).add(h[1]).sub(y).sub(t[i].mul(dy)).eq(0));
    solver.add(t[i].mul(h[5]).add(h[2]).sub(z).sub(t[i].mul(dz)).eq(0));
  }
  await solver.check()
  console.log('Part 2', Number(solver.model().eval(x.add(y).add(z)).value()))
}


inicio = new Date();
console.log('part1 demo', part1(demo, 7, 27));
console.log('part1 entry', part1(entry, 200000000000000, 400000000000000));
console.log('part1 demo', part2(demo));
console.log('part2 entry', part2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);