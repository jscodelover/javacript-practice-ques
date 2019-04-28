"use strict";

/**
 * @Problem : Given two sorted array of integers, return single sorted array of integer.
 * Example: 
 *   Given nums1 = [2, 7, 11, 15], nums2 = [1, 5, 13, 16], 
 *   return [1, 2, 5, 7, 11, 13, 15, 16].vc
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const merge = function(nums1, nums2){
    if(typeof nums1 !== 'object' || typeof nums2 !== 'object' )
        return [];
    if(!nums1.length || !nums2.length)
        return [...nums1,...nums2];

    let numsEle1 = nums1[0];
    let numsEle2 = nums2[0];
    let pos1 = 0;
    let pos2 = 0;
    
    let newArray = [];
    
    while(numsEle1 || numsEle2){
        if(numsEle1 < numsEle2 || numsEle2 === undefined){
            newArray.push(numsEle1);
            numsEle1 = nums1[++pos1];
        }
        else{
            newArray.push(numsEle2);
            numsEle2 = nums2[++pos2];
        }
    }
    return newArray;
}

module.exports = merge;