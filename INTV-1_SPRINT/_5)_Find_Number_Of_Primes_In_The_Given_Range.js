/** 
 * ! Questions Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_NUMBEROFPRIMESINRANGEBASIC/
*/

/** 
 * 
*/

function isPrimeOrNot(n){
    if(n === 0 || n===1){
        return false
    }

    for(let i=2; i<= n^1/2; i++){
        if(n%2 === 0){
            return true
        }
        return false
    }
}
console.log(isPrimeOrNot(3))