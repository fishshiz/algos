// You are a professional robber planning to rob houses along a street.Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non - negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

const robber = nums => {
  let notRob = 0;
  let rob = 0;

  for (let idx in nums) {
    let currentHouse = nums[idx] + notRob;
    notRob = Math.max(notRob, rob);
    rob = currentHouse;
  }

  return Math.max(notRob, rob);
};
