/**
 * 
 */

// Call by value : 기본형
let a = 100;
let b = "홍길동";
let c = a; // c = 100
console.log('c : ', c);

// Call by reference : 참조형
let aa = [1,2,3];
let bb = {name:"홍길동"};
let cc = aa; // 주소를 통해 aa의 배열 객체 공유
console.log(typeof aa, typeof bb);

console.log(cc);
cc[0] = 3; // c가 보고 있는 배열의 첫번째 값을 3으로 변경
console.log(aa); // aa의 배열 객체를 공유하므로 aa의 값 변경