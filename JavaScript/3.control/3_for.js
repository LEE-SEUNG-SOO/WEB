/**
 * 반복문 : for, while
 * for : 반복횟수를 알때
 * while : 종료 조건을 알때
 * 
 * for(초기값; 조건문; 증감식) { 실행문 }
 * 초기값은 let으로 선언
 * 
 */

// 1~10까지 출력
for(let i = 1; i <= 10; i++){
    console.log('number :', i);
}

console.log("--------------------------------------");

// 숫자 배열을 출력
let numbers = [1, 3, 5, 8, 9];

for(let i = 0; i < numbers.length; i++){
    console.log(`numbers[${i}] : ${numbers[i]}`);
};

console.log('-----------------------------------');

// 과일이 레몬이면 이모지 출력
let fruits = ['사과','오렌지','레몬'];
let emojis = ['🍎','🍊','🍋'];

for(let i = 0; i<fruits.length; i++){
    let fruit = fruits[i];
    let emoji = emojis[i];

    if(fruit == '오렌지'){
        console.log(`${fruit} : ${emoji}`);    
    }
}