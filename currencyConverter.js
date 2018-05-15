/* given a number, convert it to  */

function converter(num) {
    // string - array - reverse our nums
    nums = num.toString().split("").reverse()
    let result = []
    // loop thru reversed nums
    for (let i = 0; i < nums.length; i++) {
        // when we reach a 3rd num, we need to add a comma
        if (i % 3 === 0 && i !== 0) {
            result.push(nums[i] + ",")
        } else {
            //otherwise we just need a number
            result.push(nums[i])
        }

    }
    // reverse and re-join numbers
    return result.reverse().join("")

}

converter(10000000000023423414) // 10.000