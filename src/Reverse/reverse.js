"use strict";

/**
 * @Problem : Create a function that reverse a string.
 *  For example - 'Hi my name is jscodelover' should be 'revoledocsj si eman ym ih'
 *
 */

function reverseWithBuildIn1(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseWithBuildIn2(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;
  return [...str].reverse().join("");
}

function reverseUsingString(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;
  let rev = "";
  for (let i of str) rev = i + rev;
  return rev;
}

function reverseWithArray(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;
  let rev = [];
  for (let i = str.length - 1; i >= 0; i--) rev.push(str[i]);
  return rev.join("");
}

module.exports = {
  reverseWithBuildIn1,
  reverseWithBuildIn2,
  reverseUsingString,
  reverseWithArray
};
