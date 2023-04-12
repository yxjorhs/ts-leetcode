import ListNode from "./libs/list_node";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) return null;

  let res: ListNode | null = null;
  let tail: ListNode | null = null;
  let add = 0;

  while (l1 !== null || l2 !== null || add === 1) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    let v = v1 + v2 + add;
    add = Math.floor(v / 10);
    v = v % 10;

    const node = new ListNode(v);
    if (tail) tail.next = node;
    tail = node;
    if (res === null) res = node;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return res;
}
