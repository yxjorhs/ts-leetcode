export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/** 遍历 */
export function traversal(
  node: TreeNode | null,
  forward: "before" | "in" | "after",
  cb: (node: TreeNode) => void
) {
  if (node === null) return;

  if (forward === "before") cb(node);
  traversal(node.left, forward, cb);
  if (forward === "in") cb(node);
  traversal(node.right, forward, cb);
  if (forward === "after") cb(node);
}

/** 数组构建二叉树 */
export function buildByArray(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) return null;

  const nodeArr: TreeNode[] = [];
  /** 父节点下标记 */
  let parent = 0;
  /** -1:子节点在父节点的左边，1:子节点在父节点的右边 */
  let toward = -1;

  for (let i = 0; i < arr.length; i++) {
    toward *= -1;

    if (arr[i] === null) {
      if (i === 0) return null;
      continue;
    }

    const node = new TreeNode(arr[i] as number, null, null);
    nodeArr.push(node);

    if (i === 0) continue;

    if (toward === -1) {
      nodeArr[parent].left = node;
    } else {
      nodeArr[parent].right = node;
      parent++;
    }
  }

  return nodeArr[0];
}
