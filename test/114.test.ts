import assert from "assert";
import { buildByArray } from "../src/libs/tree_node";
import { flatten } from "../src/114";
describe("114", () => {
  it("case1", () => {
    let tree = buildByArray([1, 2, 5, 3, 4, null, 6]);
    flatten(tree);
    for (let i = 0; i < 6; i++) {
      assert(tree && tree.val === i + 1);
      tree = tree.right;
    }
  });
});
