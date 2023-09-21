/**
 * ! Questions Link : 
 *  @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_FACTORIALBASIC/
*/

/**
 * @description :: Approach -1::
 * 
 * (i) We have to find out the Factorial of the given Input which will be a number
 *          - thats mean if input n = 3 ;
 *            the factorial will be 3! = 3 * 2 * 1 = 6
 * 
 * (ii) We can itrate over the for Loop and multiple each of number
 * 
 * So, here the @timeComplexity is O(n) and the @spaceComplexity is O(1)
*/


function factorialBasic_Approach_1(n){
    let factorial = 1;
    for(let i =1; i<=n; i++){
        factorial *= i
    }
    return factorial
}


/**
 * @description :: Approach -2 ::
 * 
 * (i) We can use recursive function for the approach -2
 *          ** Recursive function is a function which can call that function itself.
 * 
 * So, here the @timeComplexity is O(n) and the @spaceComplexity is O(n) 
 *          ** Here we do not use extra space but on Recursive function
 *              the data store in callStack, Create a memory on CallStack
*/


function factorialBasic_Approach_2(n){
    if(n === 0){
        return 1
    }
    let ans = factorialBasic_Approach_2(n-1)
    return ans*n
}

console.log("APPROACH-1::",factorialBasic_Approach_1(2))
console.log("APPROACH-2::",factorialBasic_Approach_2(2))