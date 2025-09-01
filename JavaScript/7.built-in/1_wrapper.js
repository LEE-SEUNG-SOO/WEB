/**
 * 기본형(원시) 데이터 타입 - number, string, boolean, null, undefined
 * 기본 데이터타입에 클래스 형식으로 정의한 데이터 타입을 wrapper클래스 라고 함
 */

// number 클래스 형식
console.log('---------number-----------')
let a = "123";

if(typeof a == 'string'){
    parseInt(a);
}

console.log(typeof a, a);

if(a == 123){
    console.log('aa');
}

const nobj1 = new Number(123);
const nobj2 = new Number("123");
const nobj3 = new Number('123');

console.log(nobj1 instanceof Number, nobj1);
console.log(nobj2 instanceof Number, nobj2);
console.log(nobj3 instanceof Number, nobj3);
console.log(nobj1 == nobj2); // 객체이기때문에 주소값을 비교해서 false
console.log(nobj1.valueOf() == nobj2.valueOf()); // 객체에서 값을 뽑아서 비교 true

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;

console.log(maxValue, minValue);

console.clear();

// String : 문자열 클래스 형식
console.log('---------String-----------')

let str1 = new String('Hello');
let str2 = new String("Hello");

console.log(str1, str1.length, str1.valueOf());
console.log(str2, str2.length, str2.valueOf());
console.log(str1 == str2); // 객체이기때문에 주소값을 비교해서 false
console.log(str1.valueOf() == str2.valueOf()); // 객체에서 값을 뽑아서 비교 true

console.clear();
// Boolean : Boolean 클래스 형식
console.log('---------Boolean-----------')

let flag1 = true;
let flag2 = new Boolean(true);
console.log(flag1 == flag2); // Boolean은 자동으로 값을 뽑아서 비교 true
console.log(flag1 == flag2.valueOf()); // 객체에서 값을 뽑아서 비교 true