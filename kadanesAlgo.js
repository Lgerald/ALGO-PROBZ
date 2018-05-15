function kadanesAlgorithm(array) {
    // Write your code here.
    let maxhere = array[0]
    let maxTotal = array[0]
    for (let i = 1; i < array.length; i++) {
        maxhere = Math.max(array[i], (maxhere + array[i]))
        maxTotal = Math.max(maxhere, maxTotal)
    }
    return maxTotal
}