import assert from "assert";
import { generate } from "../src/118";

describe("118", () => {
  it("default", () => {
    assert(generate(1)[0][0] === 1);
    assert(generate(5)[4][2] === 6);
  });
});
