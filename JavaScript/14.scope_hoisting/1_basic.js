/**
 * scope(범위) : 메모리 관리, 이름 충돌 방지, 블록 처리 단위 개념
 * block(블록 : {})
 * { 블록 단위 실행 : 제어문(for, switch~case, while ...)} 
 */
console.clear();

let a = 10; // 전역변수, 파일 전체 어느곳에서든 호출 가능
let b = 20;
console.log(a,b);

{
    console.log(a,b); // 전역변수라 어디서든 호출
    let aa = 100;
    let bb = 200;
    console.log(aa, bb);
}

// console.log(aa, bb); // 지역변수라 해당 블록에서만 사용가능 error(is not defined)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num);
});