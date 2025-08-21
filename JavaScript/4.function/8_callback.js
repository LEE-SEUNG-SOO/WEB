/**
 * callback 함수: 함수의 파라미터로 입력되는 익명함수
 */

const job = (a, b, callback) => {
    callback(a,b);
}

const print = (a, b) => {
    console.log(a, b);
}

job(1, 2, print); // 동기식

// setTimeout 함수 호출 - 비동기식
// background에 저장된후 event loop를 통해 콜스택에서 처리 될때
// 콜백함수를 실행한다.
// setTimeout(처리할 함수, delay) 
//setTimeout(print(1,2), 2000); // 2초후 print실행
console.clear();
console.log('동기식 처리----------->1');

setTimeout( () => { 
        console.log(`setTimeout호출1`); 
    }, 2000); // 2초후 print실행
    
console.log('동기식 처리----------->2');

setTimeout( () => { 
            console.log(`setTimeout호출2`); 
        }, 0); // 2초후 print실행