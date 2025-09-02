/**
 * Map Object
 * Map : (key, value) 한 쌍으로 저장
 * set(key, value) : 데이터 저장
 * get(key) : 데이터 추출 
 * has(key) : 데이터 존재 유무
 * delete(key) : 데이터 삭제
 */

let fruitMap = new Map();

fruitMap.set('apple','🍎');
fruitMap.set('orange','🍊');
fruitMap.set('banana','🍌');


console.log(fruitMap);
console.log(fruitMap.get('apple'));
console.log(fruitMap.has('apple'));
console.log(fruitMap.delete('apple'));
fruitMap.set('banana','🍿'); // 이미 존재하는 key값이 있을경우 해당 value를 변경
console.log(fruitMap);
