/**
 * ! Question Link ::
 * @link :: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_COUNTPRIMES/
*/

/** 
 * @description :: Approach -1 ::
 * 
 * (i) First create a function isPrime which will return the boolian value,
 *      --> it return true if number is prime and return false if number is not prime.
 *      --> Then we create a another function countPrimes
 *      --> Which will call the isPrime function if it return true then count will increasing with 1
 *          Otherwise count will be same..
 * 
 * (ii) Return false for the number 1 & 0,
 * 
 * (iii) we Itrate a for loop from 2 to <n 
 * 
 * (iv) and return false if the remainder of (number % any ittration === 0) 
 * 
 *          ** here for the number 2, its checking 2<2 its false, so it exit the loop and return false
 * 
 *  Here the @timeComplexity is O(n)
 *  Here the @spaceComplexity is O(1)
*/

function isPrime_Approach_1(n) {
    let isPrimeNumber = true
    if (n === 0 || n === 1) {
        isPrimeNumber = false
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrimeNumber = false
        }
    }
    return isPrimeNumber;
}

/** 
 * @description :: Approach - 2 ::
 * 
 * (i) It will same as Approach -1 
 * 
 * (ii) But it cahnge on Condition which will be (i <= n/2)
 * 
 *  Here the @timeComplexity is O(n/2)
 *  Here the @spaceComplexity is O(1)
 * 
 * ! This is more Optimized Sollutions than the Approach-1 
*/

function isPrime_Approach_2(n) {
    if (n === 0 || n === 1) {
        return false
    }

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

/** 
 * @description :: Approach - 3 ::
 * 
 * (i) It will same as Approach -1 
 * 
 * (ii) But it cahnge on Condition which will be (i 7 n ^(1/2))
 * 
 *  Here the @timeComplexity is O(n^(1/2))
 *  Here the @spaceComplexity is O(1)
 * 
 * ! This is more Optimized Sollutions than the Approach-1 and Approach-2
*/

function isPrime_Approach_3(n) {
    if (n === 0 || n === 1) {
        return false
    }

    for (let i = 2; i < n ^ (1 / 2); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

/** 
 * @description :: The main function ::
 * 
 * (i) Make a function countPrimes which increaseing the count variable according to isPrime function
 * 
 *  Here the @timeComplexity is O(n^2) if use use Approach-1 inside that function
 *  Here the @timeComplexity is O(n^2/2) if use use Approach-2 inside that function
 *  Here the @timeComplexity is O(n*n^(1/2)) if use use Approach-3 inside that function
 * 
 * Here the @spaceComplexity is alwayes O(1)
*/

function countPrimes(n) {
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime_Approach_1(i)) {
            count++
        }
    }
    return count
}


console.log("ISPRIME_APPROACH_1 ::", isPrime_Approach_1(7))
console.log("ISPRIME_APPROACH_2 ::", isPrime_Approach_2(7))
console.log("ISPRIME_APPROACH_3 ::", isPrime_Approach_3(7))

console.log("COUNT_PRIMES:::", countPrimes(15))
