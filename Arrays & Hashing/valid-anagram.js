/*Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false

link:https://neetcode.io/problems/is-anagram?list=neetcode150

*/
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let word = s;
        let anagram = t;
        s = word.split('').sort().join('');
        t = anagram.split('').sort().join('');
        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[i]) {
                return false;
            }
        }
        return true;
    }
}
