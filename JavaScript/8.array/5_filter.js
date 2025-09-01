/**
 * 배열의 값을 순회하여 콜백함수를 적용하고, 조건에 맞는 결과를 새로운 배열로 반환
 */
let objects = [
    { name: '홍길동', age:10 },
    { name: '이순신', age:12 },
    { name: '김유신', age:15 }
];

//objects의 요소중 이름이 이순신인 객체를 새로운 배열객체로 생성
let obj = objects.filter( (item) => item.name == '이순신' );
console.log(obj);

let fruits = new Array('🍎','🍑','🍒','🍇');

const searchCount = (array, item) => {
    let result = array.filter( (fruit) => fruit == item );

    return result.length;
}

console.log(`count => ${searchCount(fruits, '🍒')}`);