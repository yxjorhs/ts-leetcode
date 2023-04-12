import TreeNode from "./libs/tree_node";
import { traversal } from "./libs/tree_node";

export function flatten(root: TreeNode | null): void {
  let head: TreeNode | null = null;
  let p: TreeNode | null = head;

  traversal(root, "before", (node) => {
    const cloneNode = new TreeNode(node.val);
    if (head === null) head = cloneNode;
    if (p) p.right = cloneNode;
    p = cloneNode;
  });

  if (root && head) {
    root.left = null;
    root.right = (head as TreeNode).right;
  }
}
