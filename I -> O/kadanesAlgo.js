/*question: write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers in a non-empty sub array of the input array. a subarray must only contain adjacent numbers*/

function kadanesAlgorithm(array) {
    // currentMax
    let maxhere = array[0]
    //total max
    let maxTotal = array[0]
    // loop thru array
    for (let i = 1; i < array.length; i++) {
        // either the max (at this moment) is the current number, or the sum of the old maxes plus the current number
        maxhere = Math.max(array[i], (maxhere + array[i]))
        // the total max is either the current total max, or the max from before
        maxTotal = Math.max(maxhere, maxTotal)
    }
    // after looping through, we should find a subset sum max, and return it
    return maxTotal
}