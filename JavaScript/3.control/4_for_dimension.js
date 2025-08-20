/**
 * 중첩 for문
 * for(){   // 행
 *      for(){  // 열
 *          실행문;
 *      }
 *      한 행 종료 후 개행
 * }
 */

/** 
 * 1(1,1)   2(1,2)  3(1,3)
 * 4(2,1)   5(2,2)  6(2,3)
 * 7(3,1)   8(3,2)  9(3,3)
*/
let number = 1;

for(let i = 1; i <= 3; i++){
    let rows = '';
    for(let j = 1; j <= 3; j++){
        rows += `${number++}(${i},${j})\t`;
    }
    console.log(rows);
}
