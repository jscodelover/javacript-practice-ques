const String = require("./customFunc");

describe("Custom Function for String reversal", () => {
  test("Reverse a empty string", () => {
    expect("".reverseString()).toBe("");
  });
  test("Reverse a string", () => {
    expect("jscodelover".reverseString()).toBe("revoledocsj");
  });
  test("IndexOf '' in empty string", () => {
    expect("".indexOf()).toBe(-1);
  });
  test("indexof 'd' in string jscodelover", () => {
    expect("jscodelover".indexOf('d')).toBe(4);
  });
});
