// Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let hash = {};
  if (s.length === 1) return 1;
  let count = 0;
  let top = 0;
  for (let i = 0; i < s.length - 1; i++) {
    hash[s[i]] = true;
    count = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (hash[s[j]]) {
        hash = {};
        if (count >= top) {
          top = count;
        }
        count = 0;
        break;
      } else {
        hash[s[j]] = true;
        count++;
      }
    }
    if (count >= top) {
      top = count;
    }
  }
  return top;
}

// -------------------------------------------------------

function lengthOfLongestSubstring(s) {
  const hash = {};
  let leftIdx = 0;

  s.split("").reduce((acc, v, i) => {
    leftIdx = hash[v] >= leftIdx ? hash[v] + 1 : leftIdx;
    hash[v] = i;
    return Math.max(acc, i - leftIdx + 1);
  }, 0);
}
