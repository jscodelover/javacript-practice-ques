"use strict";

/**
 * @Problem : Create a custom method that reverse a string and include it in String.prototype.
 *  For example - 'Hi my name is jscodelover'.reverseString() should give a result 'revoledocsj si eman ym ih' just
 *  like concat string method
 *
 */

const str = "manisha";

String.prototype.reverseString = function() {
  let rev = "";
  for (let i = 0; i < this.length; i++) {
    rev = this[i] + rev;
  }
  return rev;
};

str.reverseString();
