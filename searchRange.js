/*QUESTION: Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1] */
//non binary
var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let result = [-1, -1]
    while (right > left) {
        if (nums[right] > target) {
            right--
        }
        if (nums[left] < target) {
            left++
        }
        else if (nums[left] === target && nums[right] === target) {
                result[0] = left
                result[1] = right
                return result
            }
    }
    return result
};

//binary (time: Olog(n))
function searchRange(nums, target) {
    let left = 0
    let right = nums.length - 1
    let result = [-1, -1]
    while (right > left) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            result[0] = mid
            if (nums[mid + 1] === target) {
                result[1] = mid + 1
                return result.sort()
            }
            else if (nums[mid - 1] === target) {
                result[1] = mid - 1
                return result.sort()
            }

        }
        else if (nums[mid] > target) right = mid - 1
        else if (nums[mid] < target) left = mid + 1
    }
    return result
}
