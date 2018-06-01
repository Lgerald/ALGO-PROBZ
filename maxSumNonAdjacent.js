function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (!array.length) return 0
    if (array.length === 1) return array[0]
    // our first "sum" depends on the first two values, so we're either summing from array 0, or array1 (but the value at the first and second is the max up to, including those two)
    let first = Math.max(array[1], array[0])
    let second = array[0]
    let current;
    // const maxSums = array.slice()
    // maxSums[1] = Math.max(array[1], array[0])
    for (let i = 2; i < array.length; i++) {
        current = Math.max(first, (second + array[i]))
        second = first
        first = current
        // maxSums[i] = Math.max(maxSums[i-1], (maxSums[i-2] + array[i]))
    }
    // return maxSums[maxSums.length-1]
    return first
}