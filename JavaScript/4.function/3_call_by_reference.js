/**
 * 함수는 Object이고, Heap에 저장된다.
 * 일반함수 function으로 선언되는 경우에는, 호이스팅되어 힙에 설정된다.
 */

function add(num1, num2){
    console.log(`sum = ${num1 + num2}`);
}

console.log(add);
let sum = add;

console.log(add);
console.log(sum);
add(1,2);
sum(1,2);

