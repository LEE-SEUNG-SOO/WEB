/**
 * 함수 호출 --> parameter
 * Rest Parameter(래스트 파라미러) : 여러개의 파라미터를 전송시 사용
 * Spread operator(스프레드 연산자) : ... 매개변수(배열)로 파라미터 설정
 */

console.log(add(1,2));
console.log(add(1,2,3,4,5));
console.log(add(1,2,3,4,5,6,7,8,9,10));

// Spread operator
function add(... numbers){
    let result = 0;
    // for(let i = 0; i < numbers.length; i++){
    //     result += numbers[i];
    // }
    // result = numbers.reduce((acc, cur) => { return acc + cur }); // 실행문이 한줄일 경우 return, {} 생략가능
    result = numbers.reduce((acc, cur) => acc + cur ); // 실행문이 한줄일 경우 return, {} 생략가능

    return result;
}

console.log(add2(1,2,3));
console.log(add2(1,2,3,4,5));
console.log(add2(1,2,3,4,5,6,7,8,9,10));

// Spread operator
// 2개까진 정확한 변수에 저장
function add2(a, b, ... numbers){
    let sum = a + b;
    sum += numbers.reduce((acc, cur) => acc + cur ); // 실행문이 한줄일 경우 return, {} 생략가능
    return sum;
}



