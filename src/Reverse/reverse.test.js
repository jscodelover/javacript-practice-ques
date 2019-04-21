const Reverse = require("./reverse.js");

describe("Reverse a string", () => {
  test("Reverse a strting(a) using build-in method ", () => {
    expect(Reverse.reverseWithBuildIn1("a")).toBe("a");
  });
  test("Reverse a strting(js) using build-in method2 ", () => {
    expect(Reverse.reverseWithBuildIn2("js")).toBe("sj");
  });
  test("Reverse a strting using build-in method2 ", () => {
    expect(Reverse.reverseWithBuildIn2("coder")).toBe("redoc");
  });
  test("Reverse a string using reverseUsingString", () => {
    expect(Reverse.reverseUsingString("jscodelover")).toBe("revoledocsj");
  });
  test("Reverse a string with reverseWithArray", () => {
    expect(Reverse.reverseWithArray("javascript")).toBe("tpircsavaj");
  });
});
