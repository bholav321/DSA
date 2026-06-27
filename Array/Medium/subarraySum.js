class Solution {
    subarraySum(arr, target) {
        let start = 0;
        let sum = 0;

        for (let end = 0; end < arr.length; end++) {
            sum += arr[end];

            while (sum > target && start <= end) {
                sum -= arr[start];
                start++;
            }

            if (sum === target) {
                return [start + 1, end + 1]; // 1-based indexing
            }
        }

        return [-1];
    }
}


const sol = new Solution();

console.log(sol.subarraySum([1, 2, 3, 7, 5], 12));
// Output: [2, 4]
console.log(sol.subarraySum([1, 2, 3, 4, 5], 15));
// Output: [1, 5]

console.log(sol.subarraySum([5, 3, 4], 2));
// Output: [-1]