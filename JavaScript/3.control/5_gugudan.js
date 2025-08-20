/**
 * 구구단 출력 : 2 ~ 9 단
 */


// for(let i = 2; i <= 9; i++){
//     console.log(`---- ${i}단 ----`);
//     for(let j = 1; j <= 9; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

console.log('-----------------------------구구단-----------------------------');

for(let i = 1; i <= 9; i++){
    let rows ='';
    for(let j = 2; j <= 9; j++){
        rows += `${j} x ${i} = ${j*i}\t`;
    }
    console.log(rows);
}

/**
 * 트리만들기
 * *
 * **
 * ***
 * ****
 */
console.log("----------------------------------------");

const star = '*';
for(let i = 0; i < 5; i++){
    let rows = '';
    for(let j = 0; j <= i; j++){
        rows += `${star}`;
    }
    console.log(rows);
}


console.log("----------------------------------------");
/**
 * 초록 사과 찍기, 3행만 빨간사과
 */
const redapple = '🍎';
const greenapple = '🍏';
for(let row = 1; row <= 5; row++){
    let output = '';
    for(let col = 1; col <= row; col++){
        // if(row == 3){
        //     output += `${redapple}`;
        // } else{
        //     output += `${greenapple}`;
        // }
        row == 3 ? output += `${redapple}` : output += `${greenapple}`;
    }
    console.log(output);
}