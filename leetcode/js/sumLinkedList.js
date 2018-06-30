// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
  let place = 1;
  let num1 = 0,
    num2 = 0;
  while (l1) {
    num1 += place * l1.val;
    place = place * 10;
    l1 = l1.next;
  }
  place = 1;
  while (l2) {
    num2 += place * l2.val;
    place = place * 10;
    l2 = l2.next;
  }
  let sum = num1 + num2;
  let temp;
  const output = new ListNode(sum % 10);
  temp = output;
  sum = Math.floor(sum / 10);
  while (sum > 0) {
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    sum = Math.floor(sum / 10);
  }
  return output;
};
