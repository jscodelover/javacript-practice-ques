const MyLinkedList = require("./linkedlist");

describe("Test case for 1 implementation in linked list", () => {
  test("append test case", () => {
    MyLinkedList.append(5);
    MyLinkedList.append(15);
    expect(MyLinkedList.print()).toBe("10 --> 5 --> 15");
  });
  test("prepend test case", () => {
    MyLinkedList.prepend(45);
    MyLinkedList.prepend(1);
    expect(MyLinkedList.print()).toBe("1 --> 45 --> 10 --> 5 --> 15");
  });
  test("insert test case", () => {
    MyLinkedList.insert(2, 3);
    expect(MyLinkedList.print()).toBe("1 --> 3 --> 45 --> 10 --> 5 --> 15");
  });
});
