/** 
 * ! Questions ::
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_VALIDPALINDROMEBASIC/
*/

function isAlphaNumeric(char) {
    let ch = char.charCodeAt(0)
    if (ch >= 97 && ch <= 122 || ch >= 47 && ch <= 57) {
        return true
    }
    return false
}

/** 
 * @description::
 *  race a car
 * 
 * i=0 j =9 
 * while(0<9){
 *      if(true){
 *          
 * }
 * }
*/

function isPalindrome(s) {
    let str = s.toLowerCase()
    let i = 0; j = s.length - 1;
    while (i < j) {

        if (!isAlphaNumeric(str[i])) {
            i++;
            continue
        }
        if (!isAlphaNumeric(str[j])) {
            j--;
            continue;
        }

        if (str[i] != str[j]) {
            return false
        }
        i++;
        j--
    }
    return true
}

console.log("ISPALIDROME::", isPalindrome("A man, a plan, a canal: Panama"))
console.log("ISPALIDROME::", isPalindrome("race a car"))


// race a car
// console.log("ISALPHANUMERIC::", isAlphaNumeric("@"))