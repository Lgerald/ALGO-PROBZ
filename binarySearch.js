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

//general binary search (interview cate)

function binarySearch(target, nums) {
    // see if target appears in nums
    // floor + cieling index - walls around
    // we start our wall one to the left of the 0th index
    let floorIndex = -1
    let ceilIndex = nums.length
    // if there isnt at least 2 indx between floor and cieling
    // weve run out of guesses and the number isnt there
    while (floorIndex + 1 < ceilIndex) {
        // find the midpoint (halfway between floor and ciel)
        // we must round down to avoid half indexwes
        let distance = ceilIndex - floorIndex
        let midpoint = Math.floor(distance / 2)
        // start guessing at the point between the midpoint, and the floor index
        let guessIndex = floorIndex + midpoint
        // isolate the value where looking to compare w/ our target
        let guessValue = nums[guessIndex]
        if (guessValue === target) {
            return true
        }
        if (guessValue > target) {
            // the target is to the left, so move the ceiling to the left
            ceilIndex = guessIndex
        } else {
            // otherwise, the target is to the right, so move the floor to the right
            floorIndex = guessIndex
        }
    }
    return false
}


// countingSort

function countingSort(theArray, maxValue) {
    // array of 0 set at indices 0 to max value
    let numCounts = []
    for (var i = 0; i < maxValue + 1; i++) {
        numCounts[i] = 0
    }

    //populate numCounts (each index in num counts holds the number of times that number appeared)
    theArray.forEach(num => {
        numCounts[num] += 1
    })

    //populate the final sorted array
    let sortedArray = []
    let currentIndex = 0

    //for Each num in numCounts
    for (let num = 0; num < numCounts.length; nums++) {
        let counts = numCouns[num]

        //for the number of times the item occurs
        for (let i = 0; i < count; i++) {
            sortedArray[currentIndex] = num
            currentIndex++
        }
    }
    return sortedArray
}

