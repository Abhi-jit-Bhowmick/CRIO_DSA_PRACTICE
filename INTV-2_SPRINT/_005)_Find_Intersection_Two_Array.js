/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE4/ME_DSA_LEVEL1_PRACTICE4_MODULE_INTERSECTIONOFTWOARRAYS3/
*/


function intersectionOfTwoArrays(nums1, nums2) {

    let result = [];

    for (let i = 0; i < nums1.length; i++) {

        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (result.includes(nums1[i])) {
                    continue
                } else {
                    result.push(nums1[i])
                }
            }
        }
    }
    return result
}


const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
const result = intersectionOfTwoArrays(nums1, nums2);
console.log(result)