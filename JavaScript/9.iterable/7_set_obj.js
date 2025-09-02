/**
 * Set : 다양한 데이터 타입 저장  중복 허용 X
 * - add() : 데이터 추가
 * - has() : 데이터 확인
 * - delete() : 데이터 삭제
 */

let mySet = new Set();

mySet.add(100);
mySet.add('hong');
mySet.add({name: 'hong', age:10});
mySet.add([1,2,3]);

console.log(mySet);
