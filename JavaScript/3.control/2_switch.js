/**
 * switch(조건:숫자, 문자) ~ case
 * switch(조건){
 * case 결과 : 실행문; break;
 * case 결과 : 실행문; break;
 * case 결과 : 실행문; break;
 * default : 실행문;
 * }
 */

// 선택한 요일을 출력 : 0 - 월요일, 1 - 화요일, 2 - 수요일
let useage = `사용법 : 0 - 월요일, 1 - 화요일, 2 - 수요일`;
let day = 3;
let result = undefined;

switch(day){
    case 0 : 
        result = '월요일';
        break;
    case 1 : 
        result = '화요일';
        break;
    case 2 : 
        result = '수요일';
        break;
    default :
        result = useage;
}

console.log(result);

console.log("-------------------------------");


// 입력받은 값이 홀수면 빨간사과, 짝수면 초록사과 출력
let number = 2;
let result2;

switch(number % 2){
    case 0 :
        result2 = '🍏';
        break;
    case 1 :
        result2 = '🍎';
        break;
    default:
        result2 = 'error';
}

console.log('결과 :', result2);
