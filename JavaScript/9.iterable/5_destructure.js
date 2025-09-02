/**
 * destructor : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 할당
 */

let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers;

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`nlist = ${nlist}`);

b = 9898;
console.log(`b = ${b}`);
console.log(`numbers = ${numbers}`);

nlist[2] = 6666;
console.log(`nlist = ${nlist}`); // nlist = 3,4,6666
console.log(`numbers = ${numbers}`); // numbers = 1,2,3,4,5

aa[2] = 5555;
console.log(`aa = ${aa}`); // aa = 1,2,5555,4,5
console.log(`numbers = ${numbers}`); // numbers = 1,2,5555,4,5

// 2. object
console.clear();

let hong = {
    name : '홍길동',
    age : 10,
    job : '개발자'
}

// let name = hong.name;
// let age = hong.age;
// let job = hong.job;

let { name, age, job } = hong; // 요소명을 동일하게 설정

console.log(`name : ${name}`);
console.log(`age : ${age}`);
console.log(`job : ${job}`);

// 오브젝트 리터럴을 반환하는 함수
console.log('------------------------');

function createObject() {
    return {
        fname : 'apple',
        emoji : '🍎',
        color : 'red'
    };
}
// price 추가
let { fname, emoji, color, price = 100 }  = createObject();
console.log(fname, emoji, color, price);
