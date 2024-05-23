/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let temp = [...heights];
  let sorted = temp.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] != heights[i]) {
      count = count + 1;
    } else {
      count;
    }
  }
  return count;
};

let batchOne = [1, 1, 2, 3, 5, 6];
let batchTwo = [1, 1, 4, 2, 1, 3];
let batchThree = [5, 1, 2, 3, 4];

console.log("Unsorted: ", heightChecker(batchOne));
console.log("Unsorted: ", heightChecker(batchTwo));
console.log("Unsorted: ", heightChecker(batchThree));
