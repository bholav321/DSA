class Solution {
    frequencyCount(arr) {
        let freq = {};

        for (let num of arr) {
            freq[num] = (freq[num] || 0) + 1;
        }

        return Object.entries(freq).map(([key, value]) => [Number(key), value]);
    }
}

let arr = [1, 2, 2, 3, 3, 5];

console.log(new Solution().frequencyCount(arr));
// [[1, 1], [2, 2], [3, 2], [5, 1]]