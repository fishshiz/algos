// Return the longest palindrome in a string.

const longestPalindrome = string => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    let len1 = expandAroundCenter(string, i, i);
    let len2 = expandAroundCenter(string, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.floor(i - (len - 1) / 2);
      end = Math.ceil(i + len / 2);
    }
  }
  return string.slice(start, end + 1);
};

const expandAroundCenter = (string, left, right) => {
  let l = left;
  let r = right;
  while (l >= 0 && r < string.length && string[l] === string[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};
