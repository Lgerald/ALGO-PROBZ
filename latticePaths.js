/*question:Given a square grid, how could you determine the number of possible paths from the top left of the grid to the bottom right, assuming you can only move to the right and down? */

var paths = {};
function memoizer(x, y, max) {
    if (paths[[x, y, max]]) {
        return paths[[x, y, max]];
    }
    else {
        return paths[[x, y, max]] = paths2Bottom(x, y, max);
    }
}
function paths2Bottom(x, y, max) {
    if (x === max || y === max) {
        return 1;
    }
    return memoizer(x + 1, y, max) + memoizer(x, y + 1, max);
}
//paths2Bottom(0, 0, 20);

//without global var
function memoizer(x, y, max, paths = {}) {
	if (paths[[x, y, max]]) {
		return paths[[x, y, max]]
	} else {
		return (paths[[x, y, max]] = paths2Bottom(x, y, max, paths))
	}
}
function paths2Bottom(x, y, max, paths) {
	if (x === max || y === max) {
		return 1
	}
	return memoizer(x + 1, y, max, paths) + memoizer(x, y + 1, max, paths)
}

//less lines
function memoizer(x, y, max, paths = {}) {
	if (paths[[x, y, max]]) return paths[[x, y, max]]
	else return (paths[[x, y, max]] = paths2Bottom(x, y, max, paths))
}
function paths2Bottom(x, y, max, paths) {
	if (x === max || y === max) return 1
	return memoizer(x + 1, y, max, paths) + memoizer(x, y + 1, max, paths)
}

//1 function solution?

function paths2Bottom(x, y, max, meme = {}) {
    if (meme[[x, y, max]]) return meme[[x, y, max]]
    if (x === max || y === max) {
        return 1
    }
    let possiblePath = paths2Bottom(x + 1, y, max, meme) + paths2Bottom(x, y + 1, max, meme)
    meme[[x, y, max]] = possiblePath
    return possiblePath
}

//unique paths w/o obstacles
// create the board as an array of arrays, with the default values
// all the values will be set as the detault value
const createTwoDimenssionsArray = function createTwoDimenssionsArray(row, col, default_val) {
    return Array.apply(null, Array(row)).map(() => {
        return Array.apply(null, Array(col)).map(() => default_val);
    });
};
// with 2D array
var uniquePaths = function (m, n) {
    // if we;ve found 
    if (m === 0 || n === 0) {
        return 0;
    }

    const res = createTwoDimenssionsArray(m, n, 1);
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            res[i][j] = res[i - 1][j] + res[i][j - 1];
        }
    }
    return res[m - 1][n - 1];
};

// with 1D array
var uniquePaths = function (m, n) {
    if (m == 0 || n == 0) {
        return 0;
    }
    const res = Array.apply(null, Array(n)).map(() => 1);
    // loop thru the one array m times
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            res[j] = res[j - 1] + res[j];
        }
    }
    return res[n - 1];
};


// with obstacles
// takes in an array of arrays that represent the grid, with zeros and ones as values
var uniquePathsWithObstacles = function (obstacleGrid) {
    // keep track of length, cause in the end, we're going to return the last value in cols
    // the length of a column
    const cols = obstacleGrid[0].length;

    // paths is an array filled w/ arrays that are the same size as our columns
    const paths = Array.apply(null, Array(cols)).map(() => 0);
    // starting at 1
    paths[0] = 1;
    // go through the obstacle grid
    obstacleGrid.forEach((currentRow) => {
        currentRow.forEach((element, colIndex) => {
            if (element === 1) {
                // if its one, ( we have an obstacle?)
                // paths @ that index is zero - cannot move forward, so there are no paths in that directions
                paths[colIndex] = 0;
            } else if (colIndex > 0) {
                // if element is not one, it will be zero, so we have a possible path
                // if the index greater than zero
                // paths = itself plus the previous one?
                paths[colIndex] = paths[colIndex] + paths[colIndex - 1];
            }
        });
    });
    // return the last value added to paths, cause that should be the sum of all our previous ones
    return paths[cols - 1];
};