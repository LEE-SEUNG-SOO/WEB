/**
 * 비동기 처리 함수 또는 로직을 실행해주는 대리자 역할을 함
 *  - resolve, reject 결과를 반환
 *  - 실행결과는 promise객체.then(callback).catch(callback)
 *  - then() : resolve로 반환(성공)
 *  - catch() : reject로 반환(실패)
 */
console.clear();

// 순차적으로 처리하고자 하는 비동기식 코드를 포함한 경우 async를 붙인다.
async function asyncTest(){
    let dataArray = null;
    
    // 실행로직 : 비동기
    let promise1 = new Promise( (resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    }  ); // 비동기실행이므로 백그라운드로 보냄. 처리X
    
    // async가 붙은 함수안에서 비동기식 처리를 동기식처리 전에 하게끔 변경
    await promise1
        .then( (numbers) => dataArray = numbers ) // 성공시
        .catch( (reject) => { console.log("reject"); } ); // 실패시

    console.log(dataArray); // promise1에 await가 없으면 먼저 처리되므로 dataArray = null상태
}

asyncTest();