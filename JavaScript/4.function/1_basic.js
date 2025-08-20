/**
 * 함수 정의 : 자바스크립트의 함수는 object이다.
 * 
 * 1. 일반적인 함수 정의
 *  - function 함수명(매개변수) {
 *          실행 코드 작성;
 *          return 반환값; <- 반환값이 있을경우     
 *      }
 * 
 * 2. const 함수명 = (매개변수) => {
 *          실행 코드 작성;
 *          return 반환값; <- 반환값이 있을경우
 *          }
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 * - 예) parseInt(), parseDouble()... mdn api확인
 * 
 * 
 * 함수 호출 : 함수명(파라미터);
 */

// 빌트인 함수 parseInt(정수변환 값);
let str = '10';
console.log(str, typeof str);
console.log(parseInt(str), typeof parseInt(str));

// 두 수를 입력받아, 합계를 출력
let num1 = 100;
let num2 = 20;

console.log(`sum : ${num1 + num2}`);

console.log('--------함수 호출--------');

// 함수호출 : Hoisting(호이스팅) 작업
sum(1,3);

// sum 함수를 만들어서 출력
function sum(num1, num2){    
    console.log(`함수호출 :: sum = ${num1 + num2}`);    
}

sum(100,200);

console.log('--------Arrow함수 호출--------');
// Arrow 함수
// sum2(5,5); // Arrow함수는 Hositing 불가 ReferenceError

const sum2 = (num1, num2) => {
    console.log(`Arrow 함수호출 :: sum = ${num1 + num2}`);
}

sum2(5,5);