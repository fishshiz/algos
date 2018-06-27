// Given an array of strings, group anagrams together.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const dictionary = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i]
      .split("")
      .sort()
      .join();
    if (dictionary[sorted]) {
      dictionary[sorted].push(strs[i]);
    } else {
      dictionary[sorted] = [strs[i]];
    }
  }

  return Object.values(dictionary);
};
