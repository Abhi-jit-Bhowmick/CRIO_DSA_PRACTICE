/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE4/ME_DSA_LEVEL1_PRACTICE4_MODULE_FIRSTPOSITIONINSORTEDARRAY/
*/


function firstPositionInSortedArray(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            if (nums[mid - 1] === target) {
                left = mid - 1;
                right = mid
            }
            else {
                return mid
            }
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

let nums = [1, 2, 2, 2, 3, 3, 4]
let target = 3;

console.log(firstPositionInSortedArray(nums, target))