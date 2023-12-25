require("regenerator-runtime/runtime");
const { demo, entry } = require('./entry');
const mincut = require('@graph-algorithm/minimum-cut').mincut;

const cutConnection = (connections, componentA, componentB) => {
  const nodesA = connections.get(componentA);
  const nodesB = connections.get(componentB);

  connections.set(componentA, nodesA.filter((c) => c !== componentB) ?? []);
  connections.set(componentB, nodesB.filter((c) => c !== componentA) ?? []);

  return connections;
};

const getComponentGroups = (connections) => {
  const groups = [];
  const visited = new Set();

  for (const component of connections.keys()) {
    if (visited.has(component)) continue;

    const group = [];
    const queue = [component];

    while (queue.length > 0) {
      const connectedComponent = queue.pop();

      if (visited.has(connectedComponent)) continue;
      visited.add(connectedComponent);

      group.push(connectedComponent);
      queue.push(...connections.get(connectedComponent));
    }

    groups.push(group);
  }

  return groups;
};

const getComponentGroupSizes = (input) => {
  const connections = [];
  const connectionsMap = new Map();

  input.split("\n").forEach((line) => {
    const [component, connectedComponentsString] = line.split(": ");
    let connectedComponents = connectedComponentsString.split(" ");

    if (!connectionsMap.has(component)) {
      connectionsMap.set(component, connectedComponents);
    } else {
      connectionsMap.get(component).push(...connectedComponents);
    }

    for (const connectedComponent of connectedComponents) {
      connections.push([component, connectedComponent]);

      if (!connectionsMap.has(connectedComponent))
        connectionsMap.set(connectedComponent, []);

      const alreadyConnectedComponents = connectionsMap.get(connectedComponent);

      alreadyConnectedComponents.push(component);
    }
  });

  const toDisconnect = [];

  for (const connection of mincut(connections)) {
    toDisconnect.push(connection);
  }

  for (const [componentA, componentB] of toDisconnect) {
    cutConnection(connectionsMap, componentA, componentB);
  }

  const groups = getComponentGroups(connectionsMap);

  return groups[0].length * groups[1].length;
};

const part1 = (data) => {
  return getComponentGroupSizes(data)
}

let inicio = new Date();
console.log('part1 demo', part1(demo));
console.log('part1 entry', part1(entry));
let fin = new Date();
let tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);