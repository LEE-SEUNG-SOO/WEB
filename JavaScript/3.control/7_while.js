/**
 * while : 종료되는 조건을 알고 있는 경우
 * while(조건식){
 *  실행문;
 * }
 */

// 1~10까지 반복 출력
// 5까지 출력하고 종료
let count = 1;
while(count<=10){
    console.log(`i = ${count++}`);
    if(count == 6){
        // break;
        count = 11;
    }
}

console.log('--------------------------');

// 메뉴 선택
const menu = `0:🍎, 1:🍏, 2:🍋`;
let select = 0;
let flag = true;
while(flag){
    console.log(menu);
    if(select == 0){
        console.log('🍎');
        flag = false;
    } else if(select == 1){
        console.log('🍏');
        flag = false;
    } else if(select == 2){
        console.log('🍋');
        flag = false;
    } else {
        console.log('error');
        flag = false;
    }
}