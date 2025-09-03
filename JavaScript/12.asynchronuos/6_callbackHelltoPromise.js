/**
 * callbackHell을 Promise로 바꾸는법 (5_callbackHell.js)(비동기)
 */

console.clear();

function step1(initNo){
    let result1 = initNo + 1;
    return Promise.resolve(result1);
}

function step2(initNo){
    let result2 = initNo + 1;
    return Promise.resolve(result2);
}

function step3(initNo){
    let result3 = initNo + 1;
    return Promise.resolve(result3);
}

function step4(initNo){
    let result4 = initNo + 1;
    console.log(result4);
}

let aaa;

async function a(){
    await step1(0) // await로 인해 비동기식먼저 처리
        .then( (result1) => {
            console.log(`result1 => ${result1}`);
            return step2(result1);
        })
        .then( (result2) => {
            console.log(`result2 => ${result2}`);
            return step3(result2);
        })
        .then( (result3) => {
            console.log(`result3 => ${result3}`);
            aaa = result3;
        })
        .catch(error => console.log(error));
    step4(aaa); // 동기식이나 await에 의해 step1의 처리가 끝난후 실행
}

    a(); // async 함수로 나중에 실행
    step4(10); // 가장 먼저 실행

/** 실행결과 
    11
    result1 => 1
    result2 => 2
    result3 => 3
    4 
 */

