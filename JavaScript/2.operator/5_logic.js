/**
 * 논리연산자 &&(and) ||(or)
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 */

console.log("-------&&--------");

console.log((true) && (true));
console.log((true) && (false));
console.log((false) && (true));
console.log((false) && (false));

console.log("-------||--------");
console.log((true) || (true));
console.log((true) || (false));
console.log((false) || (true));
console.log((false) || (false));

console.log("-------shotcut--------");

// 입력받은 조건을 비교하여 1~9까지 범위의 수를 출력
let number = 11;
if(number > 0 && number < 10){
    console.log("true");
} else {
    console.log("false");
}

// 입력받은 숫자가 0보다 크면 출력
if(number > 0){
    console.log("true");
} else {
    console.log("false");
}