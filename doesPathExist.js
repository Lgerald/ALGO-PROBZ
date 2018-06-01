// check to see if a path exists in a graph
const doesPathExist = (graph, start, target, visited = {}) => {
    // if the start value is not in our graph iz over
    if (!graph[start]) return false
    // otherwise, store this value in the visited obj as true
    visited[start] = true;
    const graph = {
        a: ['a', 'c'],
        c: ['r', 's'],
        r: ['a'],
        s: []
    }
    // some should traverse the vertices in our graph
    //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    // for each value in the graph, test if theres some value that matches what we want, and THAT one should return true eventually
    // graph[start] is an array, that contains the potential vertices, traverse that array to see if we have a match
    return graph[start].some((vertex) => {
        // if we've reached our target, return true, cause we have a path
        if (vertex === target) return true;
        // if we dont have the value in our visited object
        if (!visited[vertex]) {
            // recursively call the function starting at this vertex
            return doesPathExist(graph, vertex, target, visited);
        } else {
            // if we have already visited this vertex, return false (ie dont visit it again)
            return false;
        }
    });
}