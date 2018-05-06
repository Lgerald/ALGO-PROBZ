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
		for (let i = 0; i <= denoms.length; i++) {
			let coin = denoms[i]
			let subTarget = target - coin
			//yields possible minimum
			let possibleMinimum = 1 + recursiveCombinatorialCoinChange(subTarget, denoms, memo)
			runningMin = Math.min(runningMin, possibleMinimum)
        }
        memo[target] = runningMin
		return runningMin
    
    //another approach
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

