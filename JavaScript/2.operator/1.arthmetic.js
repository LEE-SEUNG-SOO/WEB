/**
 * 사칙연산
 */

console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5);
console.log(3 ** 5); // 3의 5제곱

// 짝수, 홀수 선택 : %
let a = 1234;
console.log(a % 2);

// 접합연산자 +
console.log("-------접합연산자--------");

console.log(10 + 20); // 30
console.log("10" + 20); // 1020
console.log(10 + "20"); // 1020

let aaa = `합계 : ${a}`;

console.log(aaa);

// 단항 연산자 : ++, --, !, !!
console.log("----------단항 연산자----------");

let b = 10;
console.log(++b); // 11
console.log(b++); // 11
console.log(b); // 12 

let flag = true;
console.log(flag); // true
console.log(!flag); // false
console.log(!!flag); // true --> true의 부정인 false 의 부정인 true // !flag = false --> !(false)