/**
 * date 클래스
 * - Date 클래스 생성후 메소드 사용
 */

console.log(Date.now()); // 1970년도기준 현재시간까지의 시간?

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 2000년도가 넘어가면서 달 + 1 로 설정해야 제대로된 값이 출력된다.
console.log(date.getDay());

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(date.toTimeString());
console.log(date.getHours());

console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));
