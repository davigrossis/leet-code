/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.


link: https://neetcode.io/problems/string-encode-and-decode?list=neetcode150
*/
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let res = "";
        let lengths = [];
        for (let str of strs) {
            lengths.push(str.length + "#" + str);
        }
        console.log(lengths);
        for (let s of lengths) {
            res += s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let len = parseInt(str.substring(i, j));
            i = j + 1;
            res.push(str.substring(i, i + len));
            i += len;
        }
        return res;
    }
}

let s = new Solution();
console.log(s.encode(["neet", "code", "love", "you"]));
console.log(s.decode("4#neet4#code4#love3#you"));
