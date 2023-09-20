/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_REVERSENUMBASIC/
*/


/**
 * @description:: Approach -1::
 * 
 * (i) Convert in to string 
 *          (15) -> "15"    || Time Complexity is O(K)
 * (ii) Reverse the string
 *          "15" -> "51"    || Time Complexity is O(K)
 * (iii) convert string to number
 *          "51" -> 51      || Time Complexity is O(K)
 * 
 * So, the ultimate Time Complexity is   = O(K)+O(K)+O(K)
 *                                      =O(3K) = O(K)   [Where K is the Number of Input Digit]
*/

function reverseNum_Approach_1(n) {
    let numberToString = n.toString()
    let numberAfterReverse = numberToString.split("").reverse()
    return Number(numberAfterReverse.join(""))
}

console.log(reverseNum_Approach_1(100))

/**
 * @description :: Approach -2::
 * 
 * (i)  Create a sum Variable and initial value is = 0
 * 
 * (ii) Run a while loop till n is 0 Break the loop when n will 0
 * 
 * (iii) Logic is = sum *10 + remainder
 * 
 * Let input n = 153
 * sum =0   logic is = sum *10 + remainder
 * remainder = 153 % 10 = 3       and n = 153 / 10 =  15    sum = 0 * 10 + 3 = 3
 * remainder = 15 % 10 = 5        and n = 15 / 10 = 1       sum = 3 * 10 + 5 = 35
 * remainder = 1 % 10 = 1         and n = 5 / 10 = 0.2       sum = 35 * 10 + 1 = 351
 * 
*/

function reverseNum_Approach_2(n) {
    let sum = 0;
    while (n > 0) {
        let remainder = n % 10;
        n = Math.floor(n / 10);
        sum = sum * 10 + remainder
    }
    return sum
}
console.log(reverseNum_Approach_2(153))