/**
 * Number 클래스 메소드
 * - valueOf()
 * - toLocaleString()
 */

let a = 100;
let b = new Number(100);

console.log(a == b); // 비교시 앞의 값이 메소드가 아닐경우 자동변환 true

let aa = 1234567;
let bb = new Number(1234567);
let cc = '1234567';

console.log(aa.toLocaleString());
console.log(bb.toLocaleString());
console.log(cc.toLocaleString()); // String 이므로 Number 객체의 toLocaleString 사용 불가

let aaa = 123.45;
let bbb = 123.55;

console.log(aaa.toFixed()); // 실수에 대해 소수점 첫째자리 반올림후 정수 반환
console.log(bbb.toFixed()); // 실수에 대해 소수점 첫째자리 반올림후 정수 반환

