const { Edge, Graph } = require('.');

/**
 * Evaluates the adjacency of two vertices in a single direction (source -> destination) and returns the associated Edge object.
 * @param {*} graph - A graph structure to perform the check in.
 * @param {*} vertexA - The source vertex.
 * @param {*} vertexB - The destination vertex.
 * @returns {Edge | null} an Edge object if the edge is found. Returns null if not found.
 */
function getEdge(graph, vertexA, vertexB) {
  for (let neighbor of graph.getNeighbors(vertexA)) {
    if (neighbor.connectedVertex === vertexB) {
      return neighbor;
    }
  }
  return null;
}

/**
 * Given a graph with weighted edges and vertices of city names, check whether a trip is possible that only takes direct flights between each city.
 * @param {*} graph - A graph structure to perform the check in.
 * @param {*[]} cityNames - An array of city names. Corresponds to vertex values of the graph.
 * @returns {number | null} the total "cost" calculated using edge weights of each traversed vertex. Returns null if the trip is impossible.
 */
function businessTrip(graph, cityNames) {
  let totalCost = 0;
  for (let i = 1; i < cityNames.length; i++) {
    const edge = getEdge(graph, cityNames[i - 1], cityNames[i]);
    if (edge) {
      totalCost += edge.weight;
    } else {
      return null;
    }
  }
  return totalCost;
}

const graph = new Graph(false);

// Creates a graph with city names from "Wheel of Time" by Robert Jordan.
graph.addEdge('Tar Valon', 'Cairhien', 3);
graph.addEdge('Cairhien', 'Tear', 8);
graph.addEdge('Cairhien', 'Andor', 2);
graph.addEdge('Andor', 'Murandy', 3);
graph.addEdge('Andor', 'Gealdan', 8);
graph.addEdge('Murandy', 'Altara', 11);
graph.addEdge('Altara', 'Illian', 22);
graph.addEdge('Altara', 'Gealdan', 12);
graph.addEdge('Altara', 'Amadicia', 9);
graph.addEdge('Amadicia', 'Tarabon', 3);
graph.addEdge('Tarabon', 'Arad Doman', 15);
graph.addEdge('Arad Doman', 'Baerlon', 21);
graph.addEdge('Baerlon', 'Saldaea', 12);
graph.addEdge('Baerlon', 'Andor', 14);
graph.addEdge('Saldaea', 'Kandor', 13);
graph.addEdge('Kandor', 'Arafel', 11);
graph.addEdge('Arafel', 'Shienar', 10);
graph.addEdge('Arafel', 'Tar Valon', 6);
graph.addEdge('Kandor', 'Arafel', 7);

// 21
console.log(
  businessTrip(graph, ['Tar Valon', 'Cairhien', 'Tear', 'Cairhien', 'Andor'])
);

// 38
console.log(
  businessTrip(graph, [
    'Murandy',
    'Altara',
    'Amadicia',
    'Tarabon',
    'Arad Doman',
  ])
);

// 29
console.log(
  businessTrip(graph, [
    'Arafel',
    'Tar Valon',
    'Arafel',
    'Tar Valon',
    'Cairhien',
    'Tear',
  ])
);

// null
console.log(businessTrip(graph, ['Tar Valon', 'Arad Doman']));

// null
console.log(
  businessTrip(graph, [
    'Arafel',
    'Tar Valon',
    'Arafel',
    'Tar Valon',
    'Cairhien',
    'Tear',
    'Tar Valon',
  ])
);
