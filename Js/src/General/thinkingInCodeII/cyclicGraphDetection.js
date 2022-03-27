(function () {
    'use strict';

    const isCyclic = function (edges) {

        if (!edges || edges.length === 0)
            return false;

        const graph = constructGraph(edges);

        let isCyclic = false
        for (let node in graph) {
            if (!graph.hasOwnProperty(node))
                continue;
            let visited = { node: true };

            isCyclic = traverseAndCheckIsCyclic(graph, node, visited);
            if (isCyclic)
                break;
        }

        return isCyclic;
    };

    const traverseAndCheckIsCyclic = function (graph, currentNode, visited) {
        if (!graph[currentNode])
            return false;

        for (let node of graph[currentNode]) {
            let visitedCopy = {};
            Object.assign(visitedCopy, visited);
            if(currentNode === 2)
              console.log(JSON.stringify(visitedCopy));
            if (visitedCopy[node])
                return true;

            visitedCopy[node] = true;
            if (traverseAndCheckIsCyclic(graph, node, visitedCopy))
                return true;
        }

        return false;
    };

    const constructGraph = function (edges) {
        const graph = {};
        for (let item of edges) {
            if (!item || item.length !== 2)
                continue;

            if (!graph.hasOwnProperty(item[0]))
                graph[item[0]] = [];

            if (!graph.hasOwnProperty(item[1]))
                graph[item[1]] = [];

            graph[item[0]].push(item[1]);

        }
        return graph;
    };

    module.exports = isCyclic;
})();