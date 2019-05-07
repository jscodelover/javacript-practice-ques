"use strict";

/**
 * @Problem : Implement a Linked List.
 * @description: A linked list is an ordered collection of data elements.
 * A data element can be represented as a node in a linked list.
 * Each node consists of two parts: data & pointer to the next node.
 */

/**
 * Node class for creating elements in linked list
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
  }

  /**
   * append function add element to the end of the linked list.
   * @param {number} value
   */
  append(value) {
    const newEle = new Node(value);
    this.tail.next = newEle;
    this.tail = newEle;
  }

  /**
   * prepend function add element to the start of the linked list.
   * @param {string} value
   */
  prepend(value) {
    let ele = new Node(value);
    ele.next = this.head;
    this.head = ele;
  }

  // print the linked list
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
