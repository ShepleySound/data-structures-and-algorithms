# Graph Implementation

A JavaScript implementation of the [graph abstract data type](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)>). The implementation includes options for weighted/unweighted edges as well as defining a graph as either directed or undirected. Most methods have been thoroughly tested using Jest as a testing framework.

## Documentation

The following documentation was generated from in-code documentation using [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

## Classes

<dl>
<dt><a href="#Edge">Edge</a></dt>
<dd><p>Implements a weighted edge for vertices in a <a href="#Graph">Graph</a>.</p>
</dd>
<dt><a href="#Graph">Graph</a></dt>
<dd><p>Implementation of a graph using adjacency lists (<a href="https://en.wikipedia.org/wiki/Graph_(abstract_data_type)">Wikipedia reference</a>).
The class provides the option of creating either a fully directed or a fully undirected graph.</p>
</dd>
</dl>

<a name="Edge"></a>

## Edge
Implements a weighted edge for vertices in a [Graph](#Graph).

**Kind**: global class  
<a name="Graph"></a>

## Graph
Implementation of a graph using adjacency lists ([Wikipedia reference](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))).
The class provides the option of creating either a fully directed or a fully undirected graph.

**Kind**: global class  


  - [Graph](#graph)
    - [new Graph([isDirected])](#new-graphisdirected)
    - [graph.addVertex(value)](#graphaddvertexvalue)
    - [graph.addEdge(vertexA, vertexB, weight)](#graphaddedgevertexa-vertexb-weight)
    - [graph.printDFS(vertex, [visitedSet])](#graphprintdfsvertex-visitedset)
    - [graph.callbackDFS(vertex, [visitedSet], [callback])](#graphcallbackdfsvertex-visitedset-callback)
    - [graph.hasVertex(vertex) ⇒ <code>boolean</code>](#graphhasvertexvertex--boolean)
    - [graph.getVertices() ⇒](#graphgetvertices-)
    - [graph.getNeighbors(vertex) ⇒ <code>Array.&lt;Edge&gt;</code> \| <code>undefined</code>](#graphgetneighborsvertex--arrayedge--undefined)
    - [graph.isAdjacent(vertexA, vertexB) ⇒ <code>boolean</code>](#graphisadjacentvertexa-vertexb--boolean)
    - [graph.size() ⇒](#graphsize-)
    - [graph.getComponentSize() ⇒](#graphgetcomponentsize-)

<a name="new_Graph_new"></a>

### new Graph([isDirected])
Constructs a graph instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isDirected] | <code>boolean</code> | <code>true</code> | Determines whether the structure is a directed graph or an undirected graph. |

<a name="Graph+addVertex"></a>

### graph.addVertex(value)
Creates a new vertex with a corresponding adjacency list in the graph. If the value already exists in the graph, the request is ignored.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value for a vertex. Can be any JavaScript data type, since the underlying structure is a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). |

<a name="Graph+addEdge"></a>

### graph.addEdge(vertexA, vertexB, weight)
Creates an edge between two vertices. If the graph is undirected, the vertices are created in both directions.
If either vertex value does not exist in the graph, it is automatically initialized.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| vertexA | <code>\*</code> |  | Value of a graph vertex. In a directed graph, this will be the source vertex. |
| vertexB | <code>\*</code> |  | Value of a graph vertex. In a directed graph, this will be the destination vertex. |
| weight | <code>number</code> | <code>1</code> | Weight of the edge to be created. |

<a name="Graph+printDFS"></a>

### graph.printDFS(vertex, [visitedSet])
Performs a recursive depth-first traversal of the graph structure and prints each value to the console.
The traversal will not visit the same vertex twice.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| vertex | <code>\*</code> | Vertex value to begin traversing from. |
| [visitedSet] | <code>Set</code> | A set of already visited values. Defaults to a new Set, but can be provided in advance to exclude vertices from the traversal. |

<a name="Graph+callbackDFS"></a>

### graph.callbackDFS(vertex, [visitedSet], [callback])
Performs a recursive depth-first traversal of the graph structure and passes each value to a provided callback function.
The traversal will not visit the same vertex twice.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| vertex | <code>\*</code> | Vertex value to begin traversing from. |
| [visitedSet] | <code>Set</code> | A set of already visited values. Defaults to a new Set, but can be provided in advance to exclude vertices from the traversal. |
| [callback] | <code>function</code> | A callback function that takes the value of the vertex as an argument. |

<a name="Graph+hasVertex"></a>

### graph.hasVertex(vertex) ⇒ <code>boolean</code>
Checks for the existence of a vertex value in the graph.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: <code>boolean</code> - True if the vertex exists in the graph. Returns false if the vertex does not exist.  

| Param | Type |
| --- | --- |
| vertex | <code>\*</code> | 

<a name="Graph+getVertices"></a>

### graph.getVertices() ⇒
Uses the underlying adjacency list to return an array of values from the graph, irrespective of their edges.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: The values of each vertex in the graph.  
<a name="Graph+getNeighbors"></a>

### graph.getNeighbors(vertex) ⇒ [<code>Array.&lt;Edge&gt;</code>](#Edge) \| <code>undefined</code>
Returns the immediate edges of the given vertex.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: [<code>Array.&lt;Edge&gt;</code>](#Edge) \| <code>undefined</code> - An array of graph edges, each with a value and a weight. Returns undefined if the vertex does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| vertex | <code>\*</code> | The vertex to reference. |

<a name="Graph+isAdjacent"></a>

### graph.isAdjacent(vertexA, vertexB) ⇒ <code>boolean</code>
Evaluates the adjacency of two vertices in a single direction. (source -> destination).

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: <code>boolean</code> - true if vertexA has an edge containing vertexB. Returns false if no matching edge is found.  

| Param | Type | Description |
| --- | --- | --- |
| vertexA | <code>\*</code> | The source vertex. |
| vertexB | <code>\*</code> | The destination vertex. |

<a name="Graph+size"></a>

### graph.size() ⇒
**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: the size of the graph as represented by the adjacency list. Each vertex increases the size by 1, regardless of edges.  
<a name="Graph+getComponentSize"></a>

### graph.getComponentSize() ⇒
Finds the number of [components](https://en.wikipedia.org/wiki/Component_(graph_theory)) in the graph.
A component is defined as a set of vertices that share a connection, also known as a subgraph.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: The number of components. In a fully connected graph, this number will be 1.  

