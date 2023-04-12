import assert from "assert";
import { addTwoNumbers } from "../src/2";
import { buildByArray, toArray } from "../src/libs/list_node";

describe("2", () => {
  it("case1", () => {
    const list = addTwoNumbers(
      buildByArray([2, 4, 3]),
      buildByArray([5, 6, 4])
    );

    const arr = toArray(list);
    assert(arr[0] === 7);
    assert(arr[1] === 0);
    assert(arr[2] === 8);
  });
});
