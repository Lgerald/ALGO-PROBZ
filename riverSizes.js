/*you are given a two dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. each 0 represents land, and each 1 represents part of a river. a river consists of any numbers of 1s that are either horizontally or vertically adjacebt(but not diagonal). the number of adjacent 1's forming a river determine its size. write a function that returns an array of the sizes of all rivers represented in the input matrix. note that these sizes do not need to be in any particular order

*/


function riverSizes(matrix) {
    const sizes = []
    // make another 2D array to store if the river has been visited
    const visited = matrix.map(row => row.map(value => false))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue
            traverseNode(i, j, matrix, visited, sizes)
        }
    }
    return sizes
}

function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0
    const nodesToExplore = [[i, j]]
    // while we still have nodes to explore (which we later update, keep exploring them one by one)
    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop()
        // isolate the coordinates in the matrix
        i = currentNode[0]
        j = currentNode[1]
        // if visited, it doesnt effect things
        if (visited[i][j]) continue
        // reassign visited status
        visited[i][j] = true
        // if the value is zero it doesnt matter
        if (matrix[i][j] === 0) continue
        // but then update the current river size
        currentRiverSize++
        // go thru array of unvisited neightbodys, and add them to nodes to explore
        const unvisitedNeighbors = getUnvisetedNeigbors(i, j, matrix, visited)
        for (const neigbor of unvisitedNeighbors) {
            nodesToExplore.push(neighbor)
        }
    }
    // once there are no longer nodes to explore, push that river size into the sizes array
    if (currentRiverSize > 0) sizes.push(currentRiverSize)
}

function getUnvisetedNeigbors(i, j, matrix, visited) {
    const unvisitedNeighbors = []
    // explore all the neighbors within the bounds of the matrix, push their indices into an array, and return them
    if (i > 0 && !visited[i-1][j]) unvisitedNeighbors.push([i-1,j])
    if (i < matrix.length-1 && !visited[i+1][j]) unvisitedNeighbors.push([i+1][j])
    if (j > 0 && !visited[i][j-1]) unvisitedNeighbors.push([i][j-1])
    if (j < matrix[0].length -1 && !visited[i][j+1]) unvisitedNeighbors.push([i][j+1])
    return unvisitedNeighbors
}