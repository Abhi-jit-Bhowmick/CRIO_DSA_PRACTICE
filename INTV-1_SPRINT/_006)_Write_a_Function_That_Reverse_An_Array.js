/** 
 * ! Question Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_REVERSEARRAY/
*/


function reverseArray(n, arr) {
    let i = 0;
    let j = n-1;
    

    while (i <j) {
        var temp = arr[i] // temp =5
        arr[i]= arr[j] // 
        arr[j]= temp
        i++;
        j--
    }
    return arr
}


console.log(reverseArray(5, [5, 12, 9, 1, 8]))