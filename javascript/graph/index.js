'use strict';

/**
 * Implements a weighted edge for vertices in a {@link Graph}.
 */
class Edge {
  constructor(v, w) {
    this.connectedVertex = v;
    this.weight = w;
  }
}

/**
 * Implementation of a graph using adjacency lists ([Wikipedia reference](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))).
 * The class provides the option of creating either a fully directed or a fully undirected graph.
 */
class Graph {
  /**
   * Constructs a graph instance.
   * @param {boolean} [isDirected=true] - Determines whether the structure is a directed graph or an undirected graph.
   */
  constructor(isDirected = true) {
    this._vertices = new Map();
    this._isDirected = isDirected;
  }

  /**
   * Creates a new vertex with a corresponding adjacency list in the graph. If the value already exists in the graph, the request is ignored.
   * @param {*} value - Value for a vertex. Can be any JavaScript data type, since the underlying structure is a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
   */
  addVertex(value) {
    if (!this._vertices.has(value)) {
      this._vertices.set(value, []);
    }
  }

  /**
   * Creates an edge between two vertices. If the graph is undirected, the vertices are created in both directions.
   * If either vertex value does not exist in the graph, it is automatically initialized.
   * @param {*} vertexA - Value of a graph vertex. In a directed graph, this will be the source vertex.
   * @param {*} vertexB - Value of a graph vertex. In a directed graph, this will be the destination vertex.
   * @param {number} weight - Weight of the edge to be created.
   */
  addEdge(vertexA, vertexB, weight = 1) {
    if (typeof weight !== 'number') {
      throw new Error('Edge weight must be a number.');
    }
    this.addVertex(vertexA);
    this.addVertex(vertexB);

    if (
      !this.isAdjacent(vertexA, vertexB) &&
      !this.isAdjacent(vertexB, vertexA)
    ) {
      this._vertices.get(vertexA).push(new Edge(vertexB, weight));
      if (!this._isDirected) {
        this._vertices.get(vertexB).push(new Edge(vertexA, weight));
      }
    }
  }

  /**
   * Performs a recursive depth-first traversal of the graph structure and prints each value to the console.
   * The traversal will not visit the same vertex twice.
   * @param {*} vertex - Vertex value to begin traversing from.
   * @param {Set} [visitedSet] - A set of already visited values. Defaults to a new Set, but can be provided in advance to exclude vertices from the traversal.
   */
  printDFS(vertex, visitedSet = new Set()) {
    if (!visitedSet.has(vertex)) {
      console.log(vertex);
      visitedSet.add(vertex);
      for (let neighbor of this._vertices.get(vertex)) {
        this.printDFS(neighbor.connectedVertex, visitedSet);
      }
    }
  }

  /**
   * Performs a recursive depth-first traversal of the graph structure and passes each value to a provided callback function.
   * The traversal will not visit the same vertex twice.
   * @param {*} vertex - Vertex value to begin traversing from.
   * @param {Set} [visitedSet] - A set of already visited values. Defaults to a new Set, but can be provided in advance to exclude vertices from the traversal.
   * @param {Function} [callback] - A callback function that takes the value of the vertex as an argument.
   */
  callbackDFS(vertex, visitedSet = new Set(), callback = () => {}) {
    if (!visitedSet.has(vertex)) {
      callback(vertex);
      visitedSet.add(vertex);
      for (let neighbor of this._vertices.get(vertex)) {
        this.callbackDFS(neighbor.connectedVertex, visitedSet, callback);
      }
    }
  }

  /**
   * Performs an iterative breadth-first traversal of the graph structure and passes each value to a provided callback function.
   * The traversal will not visit the same vertex twice.
   * @param {*} vertex - Vertex value to begin traversing from.
   * @param {Function} callback - A callback function that takes the value of the vertex as an argument.
   */
  callbackBFS(vertex, callback) {
    const queue = [vertex];
    const visitedSet = new Set();
    while (queue.length > 0) {
      const current = queue.pop();
      visitedSet.add(current);
      callback(current);
      for (let neighbor of this._vertices.get(current)) {
        if (!visitedSet.has(neighbor.connectedVertex)) {
          queue.unshift(neighbor.connectedVertex);
        }
      }
    }
  }

  /**
   * Checks for the existence of a vertex value in the graph.
   * @param {*} vertex
   * @returns {boolean} True if the vertex exists in the graph. Returns false if the vertex does not exist.
   */
  hasVertex(vertex) {
    return this._vertices.has(vertex);
  }

  /**
   * Uses the underlying adjacency list to return an array of values from the graph, irrespective of their edges.
   * @returns The values of each vertex in the graph.
   */
  getVertices() {
    return [...this._vertices.keys()];
  }

  /**
   * Returns the immediate edges of the given vertex.
   * @param {*} vertex - The vertex to reference.
   * @returns {Edge[]|undefined} An array of graph edges, each with a value and a weight. Returns undefined if the vertex does not exist.
   */
  getNeighbors(vertex) {
    return this._vertices.get(vertex);
  }

  /**
   * Evaluates the adjacency of two vertices in a single direction. (source -> destination).
   * @param {*} vertexA - The source vertex.
   * @param {*} vertexB - The destination vertex.
   * @returns {boolean} true if vertexA has an edge containing vertexB. Returns false if no matching edge is found.
   */
  isAdjacent(vertexA, vertexB) {
    for (let neighbor of this.getNeighbors(vertexA)) {
      if (neighbor.connectedVertex === vertexB) {
        return true;
      }
    }
    return false;
  }

  /**
   * @returns the size of the graph as represented by the adjacency list. Each vertex increases the size by 1, regardless of edges.
   */
  size() {
    return this._vertices.size;
  }

  /**
   * Finds the number of [components](https://en.wikipedia.org/wiki/Component_(graph_theory)) in the graph.
   * A component is defined as a set of vertices that share a connection, also known as a subgraph.
   * @returns The number of components. In a fully connected graph, this number will be 1.
   */
  getComponentSize() {
    const verticesList = this.getVertices();
    const visited = new Set();
    let count = 0;
    for (let vertex of verticesList) {
      if (!visited.has(vertex)) {
        this.callbackDFS(vertex, visited);
        count++;
      }
    }
    return count;
  }
}

module.exports = { Edge, Graph };
