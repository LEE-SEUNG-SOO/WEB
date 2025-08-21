let name = '홍길동';
let age = 39;

// const person = {
//     name: name,
//     age: age
// };

// 프로퍼티명과 key명이 동일할경우 생략가능.
const person = {
    name,
    age
};

console.log(person);
console.log(person.name);
console.log(person.age);

let x = 0;
let y = 0;

const number = {
    x, y
};

console.log(number);
console.log("--------------------------");

// 사원들의 정보를 입력받아 객체를 생성하는 함수
// 사원의 정보 : name, age, addr
const emp1 = createEmloyee("홍길동", 20, "강남구");
const emp2 = createEmloyee("김철수", 22, "노원구");

function createEmloyee(name, age, addr) {
    return { name, age, addr }
}

console.log(emp1);
console.log(emp2);
