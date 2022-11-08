const { Edge, Graph } = require('../index');

describe('Test graph implementation', () => {
  const directedGraph = new Graph();
  const undirectedGraph = new Graph(false);

  test('Graph has initial properties', () => {
    expect(directedGraph._vertices).toBeInstanceOf(Map);
    expect(directedGraph._isDirected).toEqual(true);
    expect(undirectedGraph._isDirected).toEqual(false);
  });

  test('Graph can have vertices added to it with confirmation', () => {
    undirectedGraph.addVertex('a');
    undirectedGraph.addVertex('b');
    undirectedGraph.addVertex('c');

    directedGraph.addVertex('a');
    directedGraph.addVertex('b');
    directedGraph.addVertex('c');

    expect(undirectedGraph.hasVertex('a')).toEqual(true);
    expect(undirectedGraph.hasVertex('z')).toEqual(false);
    expect(directedGraph.hasVertex('a')).toEqual(true);
    expect(directedGraph.hasVertex('z')).toEqual(false);
  });

  test('Graph can have edges added between vertices with confirmation', () => {
    undirectedGraph.addEdge('a', 'b');
    expect(undirectedGraph.isAdjacent('a', 'b')).toEqual(true);
  });

  test('Undirected graphs have edges in both directions', () => {
    expect(undirectedGraph.isAdjacent('a', 'b')).toEqual(true);
    expect(undirectedGraph.isAdjacent('b', 'a')).toEqual(true);
  });
  test('Directed graphs have edges in only one direction', () => {
    directedGraph.addEdge('a', 'b');

    expect(directedGraph.isAdjacent('a', 'b')).toEqual(true);
    expect(directedGraph.isAdjacent('b', 'a')).toEqual(false);
  });

  test('Adding edges using non-existant vertices adds the necessary values', () => {
    directedGraph.addEdge('x', 'y');
    expect(directedGraph.hasVertex('x')).toEqual(true);
    expect(directedGraph.hasVertex('y')).toEqual(true);
    expect(directedGraph.isAdjacent('x', 'y')).toEqual(true);
  });

  test('The number of all vertices can be retrieved', () => {
    expect(directedGraph.size()).toEqual(5);
    expect(undirectedGraph.size()).toEqual(3);
  });

  test('Return the neighbors of a vertex as an array of Edge objects', () => {
    const neighborsOfA = directedGraph.getNeighbors('a');
    expect(neighborsOfA).toBeTruthy();
    expect(Array.isArray(neighborsOfA)).toEqual(true);
    expect(neighborsOfA[0]).toBeInstanceOf(Edge);
  });

  test('A breadth-first traversal can be performed with a callback function', () => {
    undirectedGraph.addEdge('a', 'c');
    undirectedGraph.addEdge('c', 'd');
    undirectedGraph.addEdge('e', 'g');
    undirectedGraph.addEdge('g', 'c');
    const traversalResult = [];
    undirectedGraph.callbackBFS('a', (vertex) => traversalResult.push(vertex));
    expect(traversalResult).toEqual(['a', 'b', 'c', 'd', 'g', 'e']);
  });
});
