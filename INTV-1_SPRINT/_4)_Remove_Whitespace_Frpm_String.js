/** 
 * ! Question Link ::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE2/ME_DSA_LEVEL1_PRACTICE2_MODULE_REMOVEWHITESPACE/
*/


function removeWhiteSpace(s) {
    let lengthOfGivenString = s.length
    let strAftreRemoveWhiteSpace = ""
    for(let i =0; i<lengthOfGivenString; i++){
        if(s[i] !== " "){
            strAftreRemoveWhiteSpace += s[i]
        }
    }
    return strAftreRemoveWhiteSpace
}

console.log(removeWhiteSpace("Learn By Doing"))