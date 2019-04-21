const String = require("./customFunc");

describe("Custom Function for String reversal", () => {
  test("Reverse a empty string", () => {
    expect("".reverseString()).toBe("");
  });
  test("Reverse a string", () => {
    expect("jscodelover".reverseString()).toBe("revoledocsj");
  });
});
