/**
 * try ~ catch : JavaScript 에러 처리
 */

let numbers = [1, 2, 3];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); // undefined

numbers[9] = 1000; // 9번지에 생성
console.log(numbers);   // 3~8번지까지 빈공간
console.log(numbers[9]); // 9번지값 출력
console.log(numbers.length); // 배열의 길이 : 10

// 2. Number클래스
console.clear();
let numbers2 = new Number(12345);
console.log(numbers2[0]);

try{
    for(num of numbers2) console.log(num);
} catch(error) {
    console.log('에러');
}

