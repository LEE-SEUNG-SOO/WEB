/**
 * return : 함수의 실행결과 반환
 * 반환결과가 1개일경우 변수로, 1개이상일경우 object로 반환
 */

function add(a,b){
    return a + b;
}

console.log(add(1,2));

// 이름과 나이를 파라미터로 전송하여 객체 생성하는 함수
function createObj(name, age){
    return {
        name : name,
        age : age
    };
}
console.clear();
console.log(createObj('홍길동', 30));

let obj = createObj('홍홍홍', 20);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(createObj('미미미',10).name);

console.log('-----------------------');

let objList =[
    createObj('홍길동', 30),
    createObj('홍홍홍', 20),
    createObj('미미미', 10)
];

console.log(objList);
console.log('-----------------------');
for(let i = 0; i < objList.length; i++){
    let obj = objList[i];
    console.log(`${obj.name} : ${obj.age} `);
}

// 두 수를 입력받아 곱한 결과를 반환하는 결과
// 두 수는 0보다 커야한다.
console.clear();
function mul(num1, num2){
    let result = 0;
    if(num1 > 0 && num2 > 0) {
        result = num1 * num2;
    }
    return result;
}

console.log(`result : ${mul(2,5)}`);
