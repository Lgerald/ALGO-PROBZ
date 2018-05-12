/* Question: write a function that takes in two non-empty arrays of integers. the function should find the pair of numbers (one from the first array, one from the second) whose absolute difference is closest to zero, the function should return an array containing these two numbers, with the numbers from the first array in the first position. assume that there will only be one pair of numbers with the smallest difference */

// complexity TIME: O(nlog(n) + m(log(m))) where m and n are the size of the arrays, SPACE: O(1)

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    // sort both arrays
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    // put a pointer at the beggining of both arrays
    let pointerOne = 0
    let pointerTwo = 0
    let smolDiff = Infinity
    let curDiff = Infinity
    let smolPair = []
    // eval abs difference of the pointer numbers
    while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
        let numOne = arrayOne[pointerOne]
        let numTwo = arrayTwo[pointerTwo]
        // if the first number is bigger
        if (numOne > numTwo) {
            curDiff = numOne - numTwo
            pointerTwo++
            // if the second number is bigger
        } else if (numOne < numTwo) {
            curDiff = numTwo - numOne
            pointerOne++
        } else {
            smolPair = [numOne, numTwo]
            return smolPair
        }
        // if smollest diff is bigger than current diff, reassign
        if (curDiff < smolDiff) {
            smolDiff = curDiff
            smolPair = [numOne, numTwo]
        }
    }
    return smolPair
}