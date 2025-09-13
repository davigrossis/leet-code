class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let sizes = [],
            res = "";
        for (let s of strs) {
            sizes.push(s.length);
        }

        for (let sz of sizes) {
            res += sz + ",";
        }

        res += "#";
        for (let s of strs) {
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
        let sizes = [],
            res = [],
            i = 0;
        while (str[i] !== "#") {
            let cur = "";
            console.log(str[i]);
            while (str[i] !== ",") {
                cur += str[i];
                i++;
                console.log(cur);
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;
        for (let sz of sizes) {
            res.push(str.substr(i, sz));
            i += sz;
            console.log(res);
        }
        return res;
    }
}

let s = new Solution();
console.log(s.encode(["neet", "code", "love", "you"]));
console.log(s.decode("4,4,4,3,#neetcodeloveyou"));
