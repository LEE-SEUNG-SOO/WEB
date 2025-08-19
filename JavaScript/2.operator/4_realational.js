/**
 * 비교연산자 : >, <, >=, <=, == , ===
 */

console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(2 >= 2); // true
console.log(2 <= 2); // true
console.log('2' == 2); // true
console.log('2' === 2); // false
console.log('a' === 'b') // false

console.log("-----------object-----------");

let obj1 = {
    name:"홍길동"
}

let obj2 = {
    name:"홍길동"
}

console.log(obj1 == obj2); // false
console.log(obj1.name == obj2.name); // true