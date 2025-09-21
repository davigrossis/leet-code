/*
Products of Array Except Self
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20

link:https://neetcode.io/problems/products-of-array-discluding-self?list=neetcode150
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        let product = 1;
        let zeroCount = 0;
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                product *= nums[i];
            } else {
                zeroCount++;
            }
        }
        console.log(product);
        if (zeroCount > 1) {
            return new Array(nums.length).fill(0);
        }
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                output[i] = nums[i] === 0 ? product : 0;
            } else {
                output[i] = product / nums[i];
            }
        }
        return output;
    }
}

let s = new Solution();
console.log(s.productExceptSelf([-1, 0, 1, 2, 3]));
