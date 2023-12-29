/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE3/ME_DSA_LEVEL1_PRACTICE3_MODULE_SORTANARRAY/
*/

// Marge two sorted Array..


function marge(left, right) {
    const result = [];
    let i = 0; j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++
    }
    while (j < right.length) {
        result.push(right[j]);
        j++
    }

    return result
}


const res = marge([2, 4, 12, 119], [10, 14, 18, 34]);
console.log(res)