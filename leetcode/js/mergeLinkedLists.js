// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeLists = (l1, l2) => {
  const output = new ListNode();
  let dummy = output;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      dummy.next = l2;
      l2 = l2.next;
    } else {
      dummy.next = l1;
      l1 = l1.next;
    }
    dummy = dummy.next;
  }
  if (l1) dummy.next = l1;
  if (l2) dummy.next = l2;

  return output.next;
};

const mergeListsRecursive = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l2.next = mergeListsRecursive(l2.next, l1);
    return l2;
  } else {
    l1.next = mergeListsRecursive(l1.next, l2);
    return l1;
  }
};
