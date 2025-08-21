let a;
let b;

a = [1,2,3,4,5];

console.log(a);
console.log(typeof a);
console.log('----------------');

a = {
    name : 'name',
}

console.log(a);
console.log(typeof a);
console.log('----------------');

a = 1;

console.log(a);
console.log(typeof a);
console.log('----------------');

let address1 = undefined; // 기본형 초기화
let address2 = null; // 참조형 초기화

// address1 = 1;
// address2 = 1;

// address1 = [1,2,3];
// address2 = [1,2,3];

address1 = {
    name1234 : 'aaa'
};

address2 = {
    name1234 : 'aaa'
};

console.log(address1);
console.log(typeof address1);
console.log('----------------');
console.log(address2);
console.log(typeof address2);
console.log('----------------');

console.clear();

let list = [1,2,3,4];

console.log(list);
test(list);
console.log(list);

function test(list){
    list[0] = 3;
}

