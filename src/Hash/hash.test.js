const hash = require("./hash");

describe("Hash Function", () => {
  test("insert a value ", () => {
    hash.set('graphs',1000)
    expect(hash.get('graphs')).toBe(1000);
  });
  test("insert a value ", () => {
    hash.set('orange',2000)
    expect(hash.get('orange')).toBe(2000);
  });
});
