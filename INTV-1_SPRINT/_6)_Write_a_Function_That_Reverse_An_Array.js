/** 
 * ! Question Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_REVERSEARRAY/
*/


function reverseArray(n,arr) {
    let reversedArr = new Array;

    for(let i=n-1; i>=0; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr

}

console.log(reverseArray(5,[5,12,9,1,8]))