/** 
 * ! Question Link::
 * @link : https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_PRACTICE1/ME_DSA_LEVEL1_PRACTICE1_MODULE_DIAGONALSUMBASIC/
*/

/** 
 * @description ::
 *  -> input is 
 *                    1       2       3       4
 *                  (0,0)   (0,1)   (0,2)   (0,3)
 * 
 *                    1       2       4       5
 *                  (1,0)   (1,1)   (1,2)   (1,3)
 * 
 *                    2        3       3       4
 *                  (2,0)    (2,1)   (2,2)   (2,3)
 * 
 *                    1        1       2        3
 *                  (3,0)     (3,1)   (3,2)   (3,3)
*/


function diagonalSum(n, matrix) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += matrix[i][i]
    }

    return sum
}

const inputMatrix = [[1, 2, 3, 4], [1, 2, 4, 5], [2, 3, 3, 4], [1, 1, 2, 3]]
console.log("DiagonalSum::", diagonalSum(4, inputMatrix))
