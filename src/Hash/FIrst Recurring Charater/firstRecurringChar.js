"use strict";
/**
 * @Problem : Find the first recurring charater in an array
 *  For example: Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
                 It should return 2
                 Given an array = [2,3,4,5]:
                 It should return undefined
 */

 /**
 * @param {number[]} input
 * @return {number|undefined}
 */


/* with O(n) time complexity with object */ 
function firstRecurringCharacter1(input){
    let map = {};
    for(let i=0; i<input.length; i++){
        if(map[input[i]] !== undefined)
            return input[i];
        map[input[i]] = i;    
    }
    return undefined;
} 


/* with O(n) time complexity with map */
function firstRecurringCharacter2(input){
    let map = new Map;
    for(let i=0; i<input.length; i++){
        if(map.has(input[i]))
            return input[i];
        map.set(input[i], i);    
    }
    return undefined;
} 


module.exports = {firstRecurringCharacter1, firstRecurringCharacter2};