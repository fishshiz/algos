# Reverse a singly linked list.

class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

def reverse(head)
  return head if head.nil?

  curr = head
  prev = nil
  while (curr)
    nex = curr.next
    curr.next = prev
    prev = curr
    curr = next
  end
  prev
end
