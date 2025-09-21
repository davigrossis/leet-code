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
        const n = nums.length;
        const res = new Array(n);
        const pref = new Array(n);
        const suff = new Array(n);

        pref[0] = 1;
        suff[n - 1] = 1;
        for (let i = 1; i < n; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        } // o elemento nums[i] atual não se multiplica
        console.log(pref);
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        } // o elemento nums[i] atual não se multiplica

        console.log(suff);
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i];
        } //produto de todos os elementos exceto
        return res;
    }
}

let s = new Solution();
console.log(s.productExceptSelf([-1, 0, 1, 2, 3]));
