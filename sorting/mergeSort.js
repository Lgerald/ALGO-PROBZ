function mergeSort(array) {
    // Write your code here.
    // if our arrays of lenthe one, return itn
    if (array.length === 1) return array
    //otherwise, lets create a midpoint, and cut our arrays by that
    let mid = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, mid)
    let rightHalf = array.slice(mid)
    // then lets create a helper function that calls merge sort on either half of our arra
    return helper(mergeSort(leftHalf), mergeSort(rightHalf))

}

//helper fun
function helper(leftHalf, rightHalf) {
    let newArr = new Array(leftHalf.length + rightHalf.length)
    // move thru whole array pointer
    let k = 0
    // move thru left pointer
    let i = 0
    // move thru right pointer
    let j = 0
    while (leftHalf.length > i && rightHalf.length > j) {
        if (leftHalf[i] <= rightHalf[j]) {
            newArr[k++] = leftHalf[i++]
        } else {
            newArr[k++] = rightHalf[j++]
        }
    }
    while (i < leftHalf.length) {
        newArr[k++] = leftHalf[i++]
    }
    while (j < rightHalf.length) {
        newArr[k++] = rightHalf[j++]
    }
    return newArr

}
// make a copy of array containing two halves
// create three pointers (one for movement thru entire array, one for movement through left and right
// if left is less than right, arr[k] = left k++ i++
// if right is less than left arr[k] = right k++ i++
// if their uneven we have to do things to account for that
// stop when k > length of new arr
//return arr