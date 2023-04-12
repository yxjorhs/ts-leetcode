export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/** 使用数组构造连表 */
export function buildByArray(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    if (head === null) head = node;
    if (tail) tail.next = node;
    tail = node;
  }

  return head;
}

/** 返回连表的值是否与数组的一致 */
export function toArray(node: ListNode | null): number[] {
  const res: number[] = [];

  while (node) {
    res.push(node.val);
    node = node.next;
  }

  return res;
}
