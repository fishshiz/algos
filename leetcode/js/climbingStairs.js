// You are climbing a stair case.It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const steps = [1, 2];
  if (n <= 2) return n;
  for (let i = 2; i < n; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  return steps[n - 1];
};
