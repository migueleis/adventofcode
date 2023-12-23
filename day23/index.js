const { demo, entry } = require('./entry');

const analyzeData = (data) => {
  const map = data.split('\n').map(line => line.split(''));
  return map;
}

const D = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
}

const moves = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0]
];

const part1 = (data) => {
  const map = analyzeData(data);
  const initI = map[0].indexOf('.');
  const init = [initI, 0];

  function findLongestPath(map) {

    function isValidDir(row, col, dir) {
      const cellValue = map[row][col];
      switch (cellValue) {
        case '<':
          return dir !== D.RIGHT;
        case '>':
          return dir !== D.LEFT;
        case 'v':
          return dir !== D.UP;
        case '^':
          return dir !== D.DOWN;
        default:
          return true;
      }
    }

    function isValidMove(row, col, dir) {
      return row >= 0 && row < map.length && col >= 0 && col < map[0].length && map[row][col] !== '#' && isValidDir(row, col, dir);
    }

    function dfs(row, col, visited) {
      visited[row][col] = true;
      let currentPathLength = 0;
      for (let i = 0; i < 4; i++) {
        const newCol = col + moves[i][0];
        const newRow = row + moves[i][1];
        if (isValidMove(newRow, newCol, i) && !visited[newRow][newCol]) {
          const pathLength = dfs(newRow, newCol, visited);
          currentPathLength = Math.max(currentPathLength, pathLength);
        }
      }
      visited[row][col] = false;
      return currentPathLength + 1;
    }

    const visited = Array.from({ length: map.length }, () => Array(map[0].length).fill(false));
    let maxPathLength = 0;
    maxPathLength = Math.max(maxPathLength, dfs(1, 0, visited));
    return maxPathLength;
  }
  return findLongestPath(map) - 1;
}

const part2 = (data) => {
  const map = analyzeData(data);

  function isValid(row, col) {
    return row >= 0 && row < map.length && col >= 0 && col < map[0].length && map[row][col] !== '#';
  }

  let nodes = ["0,1", (map.length - 1) + "," + (map[0].length - 2)];
  let nodedist = [];
  for (let i = 0; i < nodes.length; i++) {
    nodedist[i] = {};
    let node = nodes[i].split(",").map(x => (+x));
    let nav = (step, last, y, x) => {
      if (!isValid(y, x)) return;

      let valids = 0;
      if (isValid(y - 1, x)) valids++;
      if (isValid(y + 1, x)) valids++;
      if (isValid(y, x - 1)) valids++;
      if (isValid(y, x + 1)) valids++;
      if (step > 0 && (valids > 2 || y < 1 || y >= map.length - 1)) {
        if (!nodes.includes(y + "," + x)) nodes.push(y + "," + x);
        nodedist[i][nodes.indexOf(y + "," + x)] = step;
        return;
      }

      if (last != 2 && y > 0) nav(step + 1, 0, y - 1, x);
      if (last != 0 && y < map.length - 1) nav(step + 1, 2, y + 1, x);
      if (last != 3) nav(step + 1, 1, y, x - 1);
      if (last != 1) nav(step + 1, 3, y, x + 1);
    }

    nav(0, -1, node[0], node[1]);
  }

  //console.log(nodes, nodedist);

  let longestp = [];
  let longests = 0;
  let nav2 = (steps, node, prev) => {
    if (node == 1) {
      if (steps > longests) {
        longestp = prev;
        longests = steps;
      }
      return;
    }
    prev.push(node);
    for (let target in nodedist[node]) {
      if (prev.includes(+target)) continue;
      let nprev = [...prev];
      nav2(steps + nodedist[node][target], +target, nprev)
    }
  }
  nav2(0, 0, []);
  //console.log(longestp, longests);
  return longests;
}


inicio = new Date();
console.log('part1 demo', part1(demo));
console.log('part1 entry', part1(entry));
console.log('part2 demo', part2(demo));
console.log('part2 entry', part2(entry));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);