/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

link: https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
*/
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();

        nums.forEach((num) => {
            const key = num;
            if (hashMap.has(num)) {
                hashMap.set(num, hashMap.get(num) + 1);
            } else {
                hashMap.set(num, 1);
            }
        });
        const sorted = Array.from(hashMap.entries()).sort(
            (a, b) => b[1] - a[1]
        );
        return sorted.slice(0, k).map((entry) => entry[0]);
    }
}

let s = new Solution();
console.log(s.topKFrequent([1, 2, 2, 3, 3, 3], 2));

//time complexity O(N log N)
//space complexity O(N)
