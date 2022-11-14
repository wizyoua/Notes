// Node is referred to as Vertex in Graphs
// graphs have weighted edges.
// Graphs are used to represent networks, social networks, maps, etc.
// a linked list is a graph as well.

//couple of ways to store a graph:
// 1. Adjacency Matrix - 2D array
//- any directional graph is not symmetrical
// weighted edges can be used and you just store the weight into the matrix
// inefficient space wise because we store not connectors in 2d array as well
// Time complexity for adding a vertex is O(n^2) because we have to loop through the whole matrix
// 2. Adjacency List - object storing the vertices and the connecting vertices
// - Space: more efficient than matrix because we only store the connections ve
// vertices and edges
// Time complexity for adding a vertex is O(1) because we just add a key to the object
// Time complexity for adding an edge is O(1) because we just add a value to the key
// Time complexity for removing a vertex is O(V + E) because we have to loop through the whole object

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.addVertex[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }

        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(v => v !== vertex2)

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(v => v !== vertex1)

            return true;
        }

        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        while (this.adjacencyList[vertex].length) {
            //see how this is efficient in a bidirectional graph since we remove vector then also while and pop
            // each item from array and remove the edge. Always remove edges first then we can remove vector
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}