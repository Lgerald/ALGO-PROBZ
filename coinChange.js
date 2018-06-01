/* find the smallest possible number of coins needed to add to a number. a function that takes a target and an array of demoninations and returns the minium number of coins needs to add to that sum
ie coinChange(40, [1,5,10,25]) => 3
    coinChange(101, [1,5,10,25]) => 5
    examples that break the greedy solution
    coinChange(6, [1,3,4])
    coinChange(13, [3,4,6]) */

//greedy approach: take as much of the largest coin as possible and continue to the next smallest coin

//O(n) - n is the length of denominations
function greedyCoinChange(target, denoms) {
    let count = 0
    // go thru the denoms array starting at the highest denomination (for this, were asusming theyre sorted)
    for (let i = denoms.length-1; i >= 0; i--) {
        let coin = demons[i]
        // to the count, add the number of times the largest coin goes into the target
        count += Math.floor(target / coin)
        //reset the target to the remainder of the division that came from the target and current coin
        target %= coin
        /* less optimal approach:
        while (target >= coin) {
            target -= coin
            count++
        }
        */
    }

    return count
}

//recursive combinatorial approach - try every possible combination
    // go through each coin
    // subtract that coin from the target yielding a sub-target
    // recursively call coin change on that subtarget
    // add one, and that yeilds a possible minium
    // return the smallest of the possible minium
    // base case: target is 0, or if we go passed 0 (return null, false, or Infinity)
    //time complexity: O(n^n) where n is length of denoms (target and n possible subtargets, where n is length of the denoms.. for depth)
    //MEMOIZATION: save results already found to use again
//create a cache/memo object, outside of the function
// runtime w/memo = O(b), pruning all the branches off reduces runtim to linear where b is the number of branches, we'll potentially have all the numbrs from 1 to target, so its based on target size only now?

function recursiveCombinatorialCoinChange(target, denoms, memo = {}) {
    if (memo.hasOwnProperty(target)/*memo[target]*/) return memo[target]
    if (target === 0) return 0
		if (target < 0) return Infinity
		let runningMin = Infinity
		for (let i = 0; i < denoms.length; i++) {
			let coin = denoms[i]
			let subTarget = target - coin
			//yields possible minimum
			let possibleMinimum = 1 + recursiveCombinatorialCoinChange(subTarget, denoms, memo)
			runningMin = Math.min(runningMin, possibleMinimum)
        }
        memo[target] = runningMin
		return runningMin

    // if (target === 0) return 0
    // if (target < 0) return Infinity
    // let possibleMinima = []
    // for (let i = 0; i <= denoms.length; i++) {
    //     let coin = denoms[i]
    //     let subTarget = target - coin
    //     //yields possible minimum
    //     let possibleMinimum = 1 + recursiveCombinatorialCoinChange(subTarget, denoms)
    //     possibleMinima.push(possibleMinimum)
    // }
    // return Math.min.apply(null, possibleMinima)
}

// algo expert style (using an array, and in place finding number of coins)
function minNumberOfCounsForChange(n, demons) {
    // make a new array of length n+1 fulled with infinity
    // initialize that array[0] = 0 (b/c for zero dollars, there are only zero ways to make change)
    // for our denoms
        // for amount 0; while amount is less than num of coins length, increment
        // if the denom is less than or equal to the amount
            // reassign num of coins[amount] = min of num of coins amount OR num of coins[amount - denom] + 1
            // ** -> that means the value of the amount before (From adding up the num curr denom num of coins away + 1)
            // b/c we are adding one of the new denom to that old one to recalculate a new min
    // after all the looping, return the value at numofcoins[n] --> should be the min amount of coins to make change at thatvalue
    // otherwise, use a ternary and return -1
    const numOfCoins = (new Array(n + 1)).fill(Infinity)
    numOfCoins[0] = 0
    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins[amount - denom])
            }
        }
    }
    return numOfCoins[n] === Infinity ? -1 : numOfCoins[n]
}
