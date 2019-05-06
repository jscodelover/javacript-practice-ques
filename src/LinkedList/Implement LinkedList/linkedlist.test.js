const MyLinkedList = require("./linkedlist");

describe("Test case for 1 implementation in linked list", () => {
  test("append test case", () => {
    MyLinkedList.append(5);
    MyLinkedList.append(15);
    MyLinkedList.append(25);
    expect(MyLinkedList.print()).toBe("10 --> 5 --> 15 --> 25");
  });
});
