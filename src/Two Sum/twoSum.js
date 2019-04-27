"use strict";

/**
 * @Problem : Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example: 
 *   Given nums = [2, 7, 11, 15], target = 9, 
 *   Because nums[0] + nums[1] = 2 + 7 = 9,
 *   return [0, 1].
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /* with O(n^2) time complexity */
 const twoSum1 = function(nums, target) {
    for(let e1=0; e1<nums.length -1; e1++){
        for(let e2=e1+1; e2<nums.length; e2++){
            if(nums[e1] + nums[e2] === target)
                return [e1,e2]
        }
    }
};

/* with O(n^2) time complexity with indexOf() method*/
const twoSum2 = function(nums, target) {
    for(let e1=0; e1<nums.length -1; e1++){
        const num = target - nums[e1];
        const e2 = nums.indexOf(num, e1+1);
        if(e2 !== -1)
            return [e1, e2];
    }
};


/* with O(n) time complexity with object */
const twoSum3 = function(nums, target) {
    let obj = {};
    for(let i=0; i<nums.length ; i++){
      if(obj[target - nums[i]] !== undefined)
        return [obj[target - nums[i]] , i];
      obj[nums[i]] = i;  
    }
};


/* with O(n) time complexity with map data structure */
const twoSum4 = function(nums, target) {
    let map = new Map;
    for(let i=0; i<nums.length ; i++){
      if(map.has(target - nums[i]) )
        return [map.get(target - nums[i]) , i];
      map.set(nums[i], i);  
    }
};


module.exports ={
    twoSum1,
    twoSum2,
    twoSum3,
    twoSum4
}
