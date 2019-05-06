"use strict";

/**
 * @Problem : Implement a Linked List.
 * @description: A linked list is an ordered collection of data elements.
 * A data element can be represented as a node in a linked list.
 * Each node consists of two parts: data & pointer to the next node.
 */

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
  }
  append(value) {
    let ele = this.head;
    while (ele.next) {
      ele = ele.next;
    }
    const newEle = {
      value,
      next: null
    };
    ele.next = newEle;
    this.tail = newEle;
  }
  print() {
    let ele = this.head;
    let result = "";
    while (ele.next) {
      result += `${ele.value} --> `;
      ele = ele.next;
    }
    result = `${result}${this.tail.value}`;
    return result;
  }
}

const MyLinkedList = new LinkedList(10);

module.exports = MyLinkedList;
