/** 
 * ! Questions Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_NUMBEROFPRIMESINRANGEBASIC/
*/

/** 
 * @description ::
 *  (i) Make a function which will return true or false according to the number is prime or not
 *  (ii) Create a for loop from l to r .
 *  (iii) And Check the number is prime or not from the given range.
 *  (iv) If the number is prime then count will increasing by one..
 * 
 *  Here the @timeComplexity is O(n*n^(1/2))
 *  Here the @spaceComplexity is O(1)
 *          ** -> Here if we use the the condition with n^(1/2) on isPrime function 
 *                then the time complexity will n*n^(1/2)
 *             -> If we use the condition with n on isPrime function then the Time Complexity 
 *                is n*n
*/

function isPrime(n) {
    if (n === 0 || n === 1) {
        return false
    }

    for (let i = 2; i < n^(1/2); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

/**
 * @description ::
 * 
 *  (i)
 */

function numberOfPrimesInARange(l, r) {
    let counter = 0

    for (let i = l; i <= r; i++) {
        if (isPrime(i)) {
            counter++
        }
    }
    return counter
}

// console.log("ISPRIME::", isPrime(4))
console.log("NUMBEROFPRIMEINRANGE::", numberOfPrimesInARange(0, 2))