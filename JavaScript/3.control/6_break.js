/**
 * break : 반복문 강제 종료시 사용
 */

// 1~10까지 출력하는 반복문
// 3까지 출력
// break
for(let i = 1; i <= 10; i++){
    if(i > 3){
        break;
    }
    console.log(i);
}

console.log('----------------------');

for(let i = 1; i <= 10; i++){
    if(i > 3){
        i = 10;
    } else {
        console.log(i);
    }
}