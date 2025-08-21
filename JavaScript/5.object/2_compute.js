import {setObject, getObject, updateObject, deleteObject} from '../commons/util.js';

const person = {
    name: '홍길동',
    age: 10,
    job: '개발자'
};

const fruits = {
    name: 'apple',
    imoji: '🍎'
};

console.log('------person 기본');
console.log(person);
setObject(person, 'addr', '강남구');
console.log('------addr 추가');
console.log(person);
console.log('------name 획득');
console.log(getObject(person, 'name'));
console.log('------name 변경');
updateObject(person, 'name', '홍홍홍');
console.log(person);
console.log('------addr 삭제');
deleteObject(person, 'addr');
console.log(person);
