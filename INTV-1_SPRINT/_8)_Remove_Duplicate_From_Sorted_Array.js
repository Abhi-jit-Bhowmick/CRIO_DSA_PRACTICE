/** 
 * ! Question Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_REMOVEDUPLICATESFROMSORTEDARRAY/
*/

function removeDuplicatesFromSortedArray(nums) {
    let i=1, j=1;
    let numsLength = nums.length;
    while(j<numsLength){
        if(nums[j] !== nums[j-1] ){
            nums[i] = nums[j];
            i++
        }
        j++
    }
    return i
}

console.log("RemoveDuplicateSortedArray::",removeDuplicatesFromSortedArray([2,4,4,4,6,8,8]))