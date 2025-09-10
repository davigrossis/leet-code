/*Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false



*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let cont = 0;
        for (let i = 0; i < nums.length; i++) {
            cont = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}

const sol = new Solution();

const input = [1, 2, 3, 3, 4];

const result = sol.hasDuplicate(input);

console.log(result);
