(function () {

    const orderOfLetters = function (inputArr) {
        const graph = createGraph(inputArr);
       
        let allnodesTraversed = false;
        let order = "";
        let nodesCount = getNodesCount(graph);

        while (!allnodesTraversed) {
            for (let item in graph) {
                if (graph.hasOwnProperty(item) && graph[item].incomingEdgesCount <= 0) {
                    order += item;
                    delete graph[item];
                    nodesCount--;

                    for (let otherItems in graph) {
                        if (graph.hasOwnProperty(otherItems)) {
                            if (graph[otherItems].edges && graph[otherItems].edges[item]) {
                                delete graph[otherItems].edges[item];
                                graph[otherItems].incomingEdgesCount -= 1;
                            }
                        }
                    }                  
                   
                }
            }
            allnodesTraversed = nodesCount <= 0;
           
        }
        for (let item in graph) {
            if (graph.hasOwnProperty(item)) {
                order.push(item);
            }
        }

        return order;

    };

    const createGraph = function (inputArr) {
        const graph = {};
        for (let data of inputArr) {
            if (data.length === 1) {
                graph[data[0]] = graph[data[0]] || { incomingEdgesCount: 0, edges: null };
            }


            for (let i = 0; i < data.length - 1; i++) {

                graph[data[i]] = graph[data[i]] || { incomingEdgesCount: 0, edges: null };
                
                if(data[i] === data[i+1])
                  continue;

                graph[data[i + 1]] = graph[data[i + 1]] || { incomingEdgesCount: 0, edges: null };



                if (!graph[data[i + 1]].edges)
                    graph[data[i + 1]].edges = {};

                if (!graph[data[i + 1]].edges[data[i]])
                    graph[data[i + 1]].incomingEdgesCount += 1;

                graph[data[i + 1]].edges[data[i]] = true;
            }
        }

        return graph;
    };

    const getNodesCount = function (graph) {
        let count = 0;
        for (let item in graph) {
            if (graph.hasOwnProperty(item))
                count++;
        }

        return count;
    };

    module.exports = orderOfLetters;
})();