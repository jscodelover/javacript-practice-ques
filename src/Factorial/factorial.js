"use strict";
/**
 * @Problem : Have the function factorial(num) take the num parameter being passed and return the factorial of it.
 *  For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
 */

/**
 * @function factorial - calculate factorial of parameter passed to it.
 * @returns {number} - return the factorial
 */

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) result *= i;
  return result;
}

/**
 * @function factorialRecursive - calculate factorial of parameter passed to it using recursion method.
 * @returns {number} - return the factorial
 *
 */
function factorialRecursive(num) {
  if (num <= 1) return 1;
  return factorialRecursive(num * num - 1);
}

module.exports = {
  factorial,
  factorialRecursive
};
