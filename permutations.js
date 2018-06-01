/* given an array of unique integers (or arbitrary characters) write a function that returns all of the permutations of these integers */
// THIS STILL MAKES NO SENSE BUT I MUST MOVE ON
//NOT BEST BUT OK
function getPermutations(array) {
    const permutations = []
    helper(array, [], permutations)
    return permutations
}

function helper(array, currentPerm, perms) {
    if (!array.length && currentPerm.length) {
        perms.push(currentPerm)
    } else {
        for (let i = 0; i < array.length; i++) {
            const newArray = array.slice(0, i).concat(array.slice(i + 1))
            const newPerm = currentPerm.concat(array[i])
            helper(newArray, newPerm, perms)
        }
    }
}
//BEST
function getPermutations(array) {
    // initialize empty arr
    const permutations = []
    // call a helpert (starting at the zeroth index of the arr, w/ the arr, and permutations arr)
    helper(0, array, permutations)
    return permutations
}

function helper(i, array, permutations) {
    // if we've reach the last index in the array, take a snapshot and push that into the permutatioms arrr
    if (i === array.length - 1) {
        permutations.push(array.slice())
    } else {
        // loop thru array, starting at i (which changes with each call)
        for (let j = i; j < array.length; j++) {
            // swap the current and next valye (for the first one no swap)
            swap(i, j, array)
            // call the helper starting at i + 1 (which will be swapped for each looping)
            helper(i + 1, array, permutations)
            // swap that back, so that on the next iteration, it will start at the correct value
            swap(i, j, array)
        }
    }
}

function swap(i, j, array) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

