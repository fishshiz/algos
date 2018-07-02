// Reverse a singly linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverse = head => {
  if (!head) return head;
  let curr = head;
  let output;
  while (curr) {
    let next = curr.next;
    curr.next = output;
    output = curr;
    curr = next;
  }
  return output;
};
