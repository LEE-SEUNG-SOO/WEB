/**
 * Primitive DataType : 기본형
 * - 정수형(Integer) : 1,2,3 ...
 * - 실수형(float, double) : 1.1, 1.2 ...
 * - 문자형(Character) : 'a', "a" ...
 * - 불린형(Boolean) : true, false
 * 
 * Reference DataType : 참조형
 * - 객체형(Object) : 클래스(class), 배열([], Array), JSON({}) ...
 */

// 정수형
let inum = 1;
console.log("정수형 : ", inum);

// 실수형
let fnum = 1.1;
console.log("실수형 : ", fnum);

// 문자형
let cname = '홍길동';
console.log("문자형 : ", cname);

// 불린형
let bflag = true;
console.log("불린형 : ", bflag);

// 객체형
let nameList = ['a',"b","c"];
console.log("배열 : ", nameList);
console.log(nameList[0], nameList[1], nameList[2]);

// 기본형, 참조형 데이터 초기화
let address1 = undefined; // 기본형 초기화
let address2 = null; // 참조형 초기화
let address3; // 기본형 초기화

console.log("address1 : ", address1);
console.log("address2 : ", address2);
console.log("address3 : ", address3);

// typeof : 데이터 타입 확인
let x = 10;
let xx = 20;
let xxx = '10';
let obj = {'name':'홍길동'}; // JSON타입
console.log(x, typeof x);
console.log(xx, typeof(xx));
console.log(typeof x == typeof xx);
console.log(typeof x === typeof xx);
console.log(typeof x == typeof xxx);
console.log(typeof x === typeof xxx);
console.log(obj == typeof obj); // false
console.log(x == xxx); // 값비교로 인해 true