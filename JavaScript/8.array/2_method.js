/**
 * 배열에서 사용하는 메소드
 *  ※ MDN사이트의 Array 클래스 참조
 */

let numbers = [1,2,3,4,5];
let fruits = new Array('🍎','🍑','🍒');

console.log(`numbers.length = ${numbers.length}`);

// 1. push() : 배열 요소 추가
numbers.push(6);
console.log(numbers);
numbers.push(7,8,9);
console.log(numbers);

fruits.push('🥝');
console.log(fruits);

// 2. keys() : 배열의 인덱스 추출 후 Iterator에 저장
console.clear();
let iterator = fruits.keys();
console.log(iterator);

for(const key of iterator){
    console.log(key);
}

// 3. 배열의 요소 삭제 : pop(), splice()
// 3-1 pop() : 배열의 마지막 요소 삭제
console.clear();
console.log('fruits : ', fruits);
console.log('fruits.pop() 마지막 요소 삭제 : ', fruits.pop());
console.log('fruits : ', fruits);

// 3-2 splice(시작인덱스, 삭제갯수, 교체아이템... ) : 배열의 시작인덱스부터 삭제 또는 교체 
console.clear();
console.log('fruits : ', fruits);
console.log(`fruits.splice(0, 1, '🥝') : ${fruits.splice(0, 1, '🥝')}`); // 0번지의 값을 🥝로 변경
console.log('fruits : ', fruits); // fruits :  [ '🥝', '🍑', '🍒' ]
console.log(`fruits.splice(0, 0, '🍎') : ${fruits.splice(0, 0, '🍎')}`); // 0번지에 삭제하지않고 🍎추가
console.log('fruits : ', fruits); // fruits :  [ '🍎', '🥝', '🍑', '🍒' ]

// 4. 배열 요소 추출 : slice(시작, 종료) : 시작인덱스부터 종료인덱스 전까지의 값을 출력(원본과 별개의 객체)
console.clear();
console.log('fruits : ', fruits); // fruits :  [ '🍎', '🥝', '🍑', '🍒' ]
let fruits_copy = fruits.slice(3);
console.log('fruits_copy : ', fruits_copy); // fruits_copy :  [ '🍒' ]
fruits_copy.push('🍇'); // 원본 배열과는 별개의 객체
console.log('fruits : ', fruits); // fruits :  [ '🍎', '🥝', '🍑', '🍒' ]
console.log('fruits_copy : ', fruits_copy); //fruits_copy :  [ '🍒', '🍇' ]

// 4-1 얕은 복사
console.clear();
let f1 = new Array('🍎','🍑','🍒');
let f1_copy = f1.slice();
let f1_copy2 = [...f1]; // ... spread operator : 전개구문
let f1_copy3 = ['🍇', ...f1, '🥝']; // ... spread operator : 전개구문

console.log(f1);
console.log(f1_copy);
console.log(f1_copy2);
console.log(f1_copy3);

// 5. concat() : 배열객체 결합시 사용
console.clear();
let f1_con = ['🍇','🥝']
console.log(f1, f1_con);
console.log(f1.concat(f1_con));

let objlist = [
    {name: '홍길동', age:10 },
    {name: '이순신', age:12 },
    {name: '김유신', age:15 }
];

let objlist2 = [...objlist];
console.log(objlist2);

// 6. join() : 배열의 문자요소를 string으로 반환
let ff = new Array('🍎','🍑','🍒');
console.log(ff.join());

