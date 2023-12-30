/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE3/ME_DSA_LEVEL1_PRACTICE3_MODULE_NTHFIBONACCINUMBERBASIC/
*/


function nthFibonacciNumber(n) {
    if (n <= 1) {
        return n
    };
    let first = 0;
    let last = 1;

    for (let i = 2; i <= n; i++) {

        let fNumber = first + last;
        first = last;
        last = fNumber
    }

    return last

}

const result = nthFibonacciNumber(3);
console.log(result);