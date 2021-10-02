'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }
    addVertex(vertex) {
        // we need to add the vertex to the adjacency list and set an empty array for the edges
        this._adjacencyList.set(vertex, []);
        return vertex;
    }
    addDirectedEdge(startVertex, endVertex) {
        if (
            !this._adjacencyList.has(startVertex) ||
            !this._adjacencyList.has(endVertex)
        ) {
            return "Invalid vertex";
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex));
    }
    printAll() {
        let str = "";
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            let edg;
            if (edge[0]) {
                edg = "";
                for (let i = 0; i < edge.length; i++) {
                    edg += `${edge[i].vertex.value},`;
                }
            } else {
                edg = edge;
            }
            str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
        }
        return str;
    }

    getNeighbors(node) {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            if (vertex === node) {
                return edge;
            }
        }
    }

    getGraphByNode(node) {
        if (this._adjacencyList.has(node)) {
            return this.printAll();
        }
    }

    size() {
        if (this._adjacencyList.size > 0) {
            return this._adjacencyList.size;
        } else {
            return null;
        }
    }
}

describe("GRAPH TESTS", () => {
    let graph;
    let ten;
    let two;
    let six;
    let four;
    let five;
    beforeAll(() => {
        graph = new Graph();
        ten = new Vertex(10);
        two = new Vertex(2);
        six = new Vertex(6);
        four = new Vertex(4);
        five = new Vertex(5);

        graph.addVertex(ten);
        graph.addVertex(two);
        graph.addVertex(six);
    });
    it("1.Node can be successfully added to the graph", () => {
        expect(graph.addVertex(four)).toEqual({ value: 4 });
    });
    it("2.An edge can be successfully added to the graph", () => {
        graph.addDirectedEdge(ten, two);
        expect(graph.addDirectedEdge(five, two)).toEqual("Invalid vertex");
        expect(graph._adjacencyList.get(ten)).toEqual([
            { vertex: { value: 2 }, weight: 0 },
        ]);
    });

    it("3.A collection of all nodes can be properly retrieved from the graph", () => {
        expect(graph.printAll()).toEqual(
            " Vertex 10 => edge 2, || Vertex 2 => edge  || Vertex 6 => edge  || Vertex 4 => edge  ||"
        );
    });

    it("4.All appropriate neighbors can be retrieved from the graph", () => {
        graph.addDirectedEdge(ten, six);
        graph.addDirectedEdge(two, four);
        graph.addDirectedEdge(four, ten);

        expect(graph.printAll()).toEqual(
            " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
        );
        expect(graph.getNeighbors(ten)).toEqual([
            { vertex: { value: 2 }, weight: 0 },
            { vertex: { value: 6 }, weight: 0 },
        ]);
        expect(graph.getNeighbors(four)).toEqual([
            { vertex: { value: 10 }, weight: 0 },
        ]);
    });

    it("5.Neighbors are returned with the weight between nodes included", () => {
        expect(graph.printAll()).toEqual(
            " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
        );
        expect(graph.getNeighbors(two)).toEqual([
            { vertex: { value: 4 }, weight: 0 },
        ]);
        expect(graph.getNeighbors(six)).toEqual([]);
    });

    it("6.A graph with only one node and edge can be properly returned", () => {
        let graphPrinted;
        if (graph._adjacencyList.has(ten)) {
            graphPrinted = graph.printAll();
        }
        expect(graphPrinted).toEqual(
            " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
        );
        expect(graph.getGraphByNode(ten)).toEqual(
            " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
        );
    });

    it("7.An empty graph properly returns null", () => {
        let emptyGraph = new Graph();
        expect(graph.size()).toEqual(4);
        expect(emptyGraph.size()).toEqual(null);
    });
});