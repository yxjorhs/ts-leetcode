import TreeNode from "./libs/tree_node";

export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  helper(root, (val) => res.push(val));

  return res;
}

function helper(root: TreeNode | null, cb: (val: number) => void) {
  if (root === null) return;

  helper(root.left, cb);
  cb(root.val);
  helper(root.right, cb);
}
