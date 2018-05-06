/*Question: write a function that takes in a sorted array of integers as well as a target integer. the function should use the binary serch algorith to find if the target number is contain in the array and should return its index if it is, otherwise -1 */

//recursive (not optimal)
// O(log(n)) time | O(log(n)) space
function binarySearch(array, target) {
    return helper(array, target, 0, array.length-1);
}

function helper(array, target, left, right) {
    // if ever left is larger you've gone too far, its over
    if (left > right) return -1
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) return middle
    else if (target > potentialMatch) return helper(array, target, left, middle - 1)
    else return helper(array, target, middle + 1, right)
}

//iterative (optimized)
// O(log(n)) time | O(1) space
function binarySearch(array, target) {
    return helper(array, target, 0, array.length - 1)
}

function helper(array, target, left, right) {
    // pointers set to either end of the array, once they reach each other its over
    while (left <= right) {
        // set a midpiont
        const middle = Math.floor((left + right) / 2)
        // potential match starts in the middle
        const potentialMatch = array[middle]
        // if we got a match, return it
        if (target === potentialMatch) return middle
        // we can rule out numbers greater than the middle pointer (including the middle) and only look at values between left and one before middle now
        else if (target < potentialMatch) right = middle - 1
        // othersiwe, we can rule out numbers less than the middle pointer (including the middle pointer) and only look at values between right and middle passed its current values
        else left = middle + 1
    }
    return -1

}

