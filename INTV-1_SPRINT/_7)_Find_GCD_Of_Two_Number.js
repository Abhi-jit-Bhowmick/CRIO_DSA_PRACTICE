/** 
 * ! Question Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_GCD/
*/

function gcd(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;


    if (a > b) {
        return gcd(a % b, b)
    } else {
        return gcd(a, b % a)
    }


}


console.log("GCD::", gcd(2, 80, 80))