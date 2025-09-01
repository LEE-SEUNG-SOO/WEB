/**
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 결과를 새로운 배열로 반환
 */

let nArray = [1.2,2.3,3.4,5.6,6.7];

// nArray 요소 출력
nArray.forEach( (item, index) => console.log(`nArrayIndex[${index}] : ${item}`) );
// nArray 요소의 소수점 절삭 후 데이터 출력
console.log('--------------------------------------------------');
let nArray2 = nArray.map( (item) => { return Math.floor(item) } ); // return 설정
let nArray3 = nArray.map( (item) => { Math.floor(item) } ); // return 없음
let nArray4 = nArray.map( (item) => Math.floor(item) ); // 자동 return
console.log('--------------------nArray2----------------------');
nArray2.forEach( (item) => console.log(item) );
console.log('--------------------nArray3----------------------');
nArray3.forEach( (item) => console.log(item) );
console.log('--------------------nArray4----------------------');
nArray4.forEach( (item) => console.log(item) );

let numbers = [1,2,3,4,5,6,7,8,9,0];

numbers = nArray.map( (item) => { return item } ); // 새로운 객체를 생성하므로 기존 numbers의 주소를 변경
console.log('------------------------------------');
console.log(numbers);

let numbers2 = numbers.map( (item) => item * 100 );
console.log('------------------------------------');
console.log(numbers2);

let objects = [
    { name: '홍길동', age:10 },
    { name: '이순신', age:12 },
    { name: '김유신', age:15 }
];


console.clear();

//objects의 요소중 이름이 이순신인 객체를 새로운 배열객체로 생성
let obj = objects.map(
    (item, index, array) => {
        let resultItem;
        if(item.name == '이순신'){
            resultItem = item;
        }
        return resultItem;
    }
)

console.log(obj);
