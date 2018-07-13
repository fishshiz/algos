// Create a function QM that takes in a string parameter
// that contains only letters, single digit numbers, and
// question marks, and checks if there are exactly 3
// question marks between every pair of two numbers that
// add up to 10. If so, return True, otherwise return False.
// If there aren't any two numbers that add up to 10 in the
// string, then your program should return False as well.

const QM = string => {
  // create hash for int index storage.
  const hash = {};
  // create queue for last 4 ?'s seen.
  const qms = [];
  let bool = false;
  // use closure to check specific indices against last 4 ?'s seen
  const threeQMS = index => {
    if (qms.length === 4) {
      return (
        qms[0] > index && qms[1] > index && qms[2] > index && qms[3] < index
      );
    } else if (qms.length === 3) {
      return qms[0] > index && qms[1] > index && qms[2] > index;
    } else {
      return false;
    }
  };
  // iterate through each element in string.
  for (let i = 0; i < string.length; i++) {
    // if element is a integer, log it to hash
    if (parseInt(string[i])) {
      let currNum = parseInt(string[i]);

      if (hash[currNum]) {
        hash[currNum].push(i);
      } else {
        hash[currNum] = [i];
      }
      let target = 10 - currNum;

      if (hash[target]) {
        let a = hash[target];
        if (target === 5) {
          a = hash[target].slice(0, hash[target].length - 1);
        }
        if (a.length === 0) {
          continue;
        } else if (a.every(threeQMS)) {
          bool = true;
        } else {
          return false;
        }
      }
    } else if (string[i] === "?") {
      qms.unshift(i);
      if (qms.length > 4) {
        qms.pop();
      }
    }
  }
  return bool;
};

console.log(QM("arrb6???4xxbl5???eee54") === false);
console.log(QM("arrb64xxbl5??eee5") === false);
console.log(QM("") === false);
console.log(QM("asdjsnfhjsbdffhjsbdfshdfb") === false);
console.log(QM("5??4xxbl7???eee") === false);
console.log(QM("5???4xxbl5???5") === false);
console.log(QM("6???44") === true);
console.log(QM("5???4xxbl55") === false);
console.log(QM("arrb6???4xxbl5???eee5") === true);
console.log(QM("asdjsnfhjsbdffhjsbdfshdfb") === false);
console.log(QM("5??4xxbl7???eee") === false);
console.log(QM("5???4xxbl55???5") === false);
console.log(QM("6???44") === true);
console.log(QM("4???6???4") === true);
console.log(QM("???6???4") === true);
console.log(QM("4???6???4???6") === false);
console.log(QM("6???4564") === false);
