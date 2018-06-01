/*question: write a function that takes in a non-empty array of distinct integers and an integer resprenting a target sum. the function should find all tripets in the array that sum up to the target sum and return a two dimensional array of all these triplets. the numbers in each triplet should be in ascending order, and the triplets themselves should be in ascending order with respect to the sumbers they hold. if no three sums sum up to the target sum the function should return an empty array */

function threeNumberSum(array, targetSum) {
    array = array.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < array.length - 2; i++) {
        let right = array.length - 1
        let left = i + 1
        while (left < right) {
            let sum = array[left] + array[i] + array[right]
            // if it equals the sum, move both pointers
            if (sum === targetSum) {
                result.push([array[i], array[left], array[right]])
                left++
                right--
            }
            // if its greater than the sum, move the right
            else if (sum > targetSum) right--
            // if its less than the sum, move the left pointer
            else if (sum < targetSum) left++
        }

    }

    return result
}