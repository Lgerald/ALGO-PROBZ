/*
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution. */

function findGrantsCap(grantsArray, newBudget) {
    let len = grantsArray.length
    grantsArray.sort((a, b) => b - a)
    grantsArray.push(0)
    let surplus = grantsArray.reduce((a, b) => a + b, 0) - newBudget
    if (surplus <= 0) {
        return grantsArray[0]
    }
    for (let i = 0; i < len; i++) {
        surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1])
        if (surplus <= 0) {
            return grantsArray[i + 1] + (-surplus / (i + 1))
        }
    }
}