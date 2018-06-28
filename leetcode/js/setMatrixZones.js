/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Given a m x n matrix, if an element is 0, set its entire row and column to 0.
// Do it in-place.

var setZeroes = function(matrix) {
  const indices = [];
  matrix.forEach(row => {
    if (row.includes(0)) {
      for (let i = 0; i < row.length; i++) {
        if (row[i] === 0) {
          indices.push(i);
        }
        row[i] = 0;
      }
    }
  });
  matrix.forEach(row => {
    for (let j = 0; j < indices.length; j++) {
      row[indices[j]] = 0;
    }
  });
};
