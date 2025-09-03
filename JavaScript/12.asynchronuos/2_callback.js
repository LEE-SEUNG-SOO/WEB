/**
 * callback : 함수에서 정의되는 함수, 무기명(anonymous) 함수
 */

// setTimeout 함수를 포함하고 있는 RunDelay 함수 정의
function runDelay(callback, seconds) {
    setTimeout(callback, seconds);
}
console.clear();

runDelay( ()=>{ console.log("3초후 task queue에 추가"); }, 3000 );
runDelay(function() { console.log(`바로 출력`); }, 1000);
runDelay(function() { console.log(`1초후 task queue에 추가`); }, 1000);

console.log('프로그램 종료');
