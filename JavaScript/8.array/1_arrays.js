/**
 * 배열이란?
 * - 동일한 데이터 타입을 가진 요소들을 물리적인 연속된 저장소에 저장
 * - 인덱스로 구분
 * - [], Array 클래스를 이용하여 생성
 * - 배열의 저장 요소는 기본 데이터타입, 참조 데이터타입 가능
 */

let array1 = new Array();
let array2 = new Array(1,2,3);
let array3 = new Array(5);

let names = ['홍길동','이순신', 10]; // 가능은 하나 권장하진 않음.
let fruits = ['🍎','🍑','🍒'];

console.log(`array1.length : ${array1.length}`);
console.log(`array2.length : ${array2.length}`);
console.log(`array3.length : ${array3.length}`);
console.log(`names.length : ${names.length}`);
console.log(`fruits.length : ${fruits.length}`);

console.log('names[2] : ', names[2]);
names[2] = '김유신';
console.log('names[2] : ', names[2]);

console.clear();
let test = new Array("5");
console.log(test.length);
