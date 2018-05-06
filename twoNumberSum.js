/*
question: write a function that takes in a non-empty array of distinct integers and an integer respesenting a target sum. if any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. if no two numbers sum up to the target sum, the function should return an empty array. assume that there will be at most one pair of numbers summing up to the target sum
*/
// cache example
// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    //store potentials in object
    let nums = {}
    // loop thru the array
    for (const num of array) {
        // find the number you would need to get a target sum based on the current num
        const sum = targetSum - num
        // if theirs a number in sums that matches our sum (ie a number we can add up to equal our target sum)
        if (sum in nums) {
            // return that number with the number in the array that matches (in order)
            return [sum, num].sort((a, b) => a - b)
        } else {
            // otherwise add that sum/match to our nums object, and start over
            num[nums] = true
        }
    }
    // if we never reach a good value, return an empty array
    return []
}

//example [1,2,3,4,5], 3
//Optimized
// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
    // sort the array
    array.sort((a, b) => a - b);
    // create pointers that point to either part of the array
    let left = 0
    let right = array.length - 1
    // while the pointers havent crossed each other
    while (left < right ) {
        // add together values at pointers
        const currentSum = array[left] + array[right]
        // if our current sum matches the target we have a winner
        if (currentSum === targetSum) {
            // return the values w/ left and right cause they already sorted
            return [array[left], array[right]]
        }
        // if our current sum is less than the target
        else if (currentSum < targetSum) {
            // increate the left pointer and start over
            left++
        // but if our current sum is greater than the target
        } else if (currentSum > targetSum) {
            //decrease the right pointer
            right--
        }
    }
    //should converge on a target sum, but if not, return an empty array
    return []
}
