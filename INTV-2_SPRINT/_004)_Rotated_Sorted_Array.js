/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE4/ME_DSA_LEVEL1_PRACTICE4_MODULE_SEARCHINROTATEDSORTEDARRAYBASIC/
*/



function search(nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid
        }

        if (nums[left] <= nums[mid]) {   // [4,5,6] [7,0,1,2] 

            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {

            if (nums[mid] <= target && target <= nums[right]) {// 6<= 1 && 1<=2
                left = mid + 1
            } else {
                right = mid - 1
            }
        }


    }
    return -1
}

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 3
const result = search(nums, target);
console.log(result)