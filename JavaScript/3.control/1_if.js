/**
 * if, if ~ else, if ~ else if ~ else
 * 삼항연산자 : 조건문 ? true일경우 실행문 : false일경우 실행문
 */

// 입력받은 과일명이 apple인 경우에만 사과이모지 출력
// apple 이외의 과일은 이름 출력
let fruit = 'apple';

if(fruit == 'apple'){
    console.log('🍎');
} else {
    console.log('🍊');
}
// 3항연산자
fruit == 'apple' ? console.log('🍎') : console.log('🍊');

let result;
fruit == 'apple' ? result='🍎' : result='🍊';
console.log(result);

console.log('-------------------------------------------');
// 선택한 메뉴 출력
let menus = ['pizza', 'hotdog', 'coffee', 'orange'];
let selectMenu = menus[3];

if(selectMenu == 'pizza'){
    console.log('🍕');
} else if(selectMenu == 'hotdog'){
    console.log('🌭');
} else if(selectMenu == 'coffee'){
    console.log('☕');
} else {
    console.log('메뉴준비중');
}

console.log('-------------------------------------------');
// 입력받은 숫자가 홀수면 사과, 짝수면 포도
let inNumber = 101;
let fresult;

if(!(inNumber % 2)){ // 1이면 true 0이면 false 이므로 생략가능
    fresult ='🍎';
} else {
    fresult ='🍇';
}

// if(1){ // 1이면 true 0이면 false 이므로 생략가능
//     fresult ='🍎';
// } else {
//     fresult ='🍇';
// }
console.log('결과 : '+ fresult);

// 1: true
inNumber % 2 ? fresult ='🍎' : fresult ='🍇';
console.log(inNumber % 2, '결과 : '+ fresult);

// 0: false
!(inNumber % 2) ? fresult ='🍎' : fresult ='🍇';
console.log(!(inNumber % 2), '결과 : '+ fresult);