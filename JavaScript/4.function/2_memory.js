/**
 * 함수 생성 및 호출
 */
import { toNumber } from "../commons/util.js";

add(100, 200);
add('100', '200');

function add(num1, num2){
    let sum = 0;
    if(typeof num1 === 'string'){
        num1 = toNumber(num1);
    }
    if(typeof num2 === 'string'){
        num2 = toNumber(num2);
    }
    sum = num1 + num2;
    console.log(`sum = ${sum}`);
}

//Arrow function
const min = (num1, num2) => {
    let result = 0;
    if(typeof num1 === 'string'){
        num1 = toNumber(num1);
    }
    if(typeof num2 === 'string'){
        num2 = toNumber(num2);
    }
    result = num1 - num2;
    console.log(`min = ${result}`);
}

min(200, 100);
min('200','100');