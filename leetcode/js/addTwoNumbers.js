// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const output = new ListNode(0);
  let dummy = output;
  let carry = 0;
  let x = l1,
    y = l2;
  while (x != null || y != null) {
    let i = x != null ? x.val : 0;
    let j = y != null ? y.val : 0;
    let sum = carry + i + j;
    carry = Math.floor(sum / 10);
    dummy.next = new ListNode(sum % 10);
    x = x !== null ? x.next : null;
    y = y !== null ? y.next : null;
    dummy = dummy.next;
  }
  if (carry > 0) dummy.next = new ListNode(carry);
  return output.next;
};
