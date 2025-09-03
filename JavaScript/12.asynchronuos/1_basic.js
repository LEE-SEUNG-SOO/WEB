/**
 * V8 엔진 구조 숙지
 * 동기식(Synchronuos)
 *  - 한 줄씩 순차적으로 실행하는 방식, 즉시 처리
 *  - 실행 > call stack > 순차적 처리
 * 
 * 비동기식(aSynchronuos)
 *  - 대량의 데이터 처리방식
 *  - 실행 > call stack > Web API, Background에 저장 > Task Queue
 *        > (call stack이 비워지면) event loop > 저장된 task를 하나씩 call stack에 올려 실행
 *  - setTimeout(), fetch(), DB연동 등..
 *  - DB 연동 시 순차적인 처리 필수( 서버연결 > SQL전송 > 결과실행 )
 *  - 비동기식 처리에서 순차적인 처리가 필요한 경우 : async, await 키워드 사용
 *  - Promise라고 객체를 이용하여 callback 함수 호출
 */

// 동기식
function a(){
    b();
    setTimeout( () => { console.log('바로 Task큐에 들어간다. a '); } );
    console.log(`-- aaa --`);
}
function b(){
    setTimeout( () => { console.log('1초후 Task큐에 들어간다. b '); }, 1000);
    console.log(`-- bbb --`);
}
function c(){
    a();
    console.log(`-- ccc --`);
}

// console.log(a, b, c);
console.clear();
c();


