const Factorial = require("./factorial");

console.log(Factorial.factorial(2));

describe("Check Factorial", () => {
  it("Negative Number", () => {
    expect(Factorial.factorial(-2)).toBe(
      "factorail of negative number can't be found"
    );
  });
  it("Negative Number for recursion", () => {
    expect(Factorial.factorialRecursive(-2)).toBe(
      "factorail of negative number can't be found"
    );
  });
  it("For iterative case", () => {
    expect(Factorial.factorial(4)).toBe(24);
  });
  it("For recursive case", () => {
    expect(Factorial.factorial(8)).toBe(40320);
  });
});
