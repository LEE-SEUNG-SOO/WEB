/**  
 * Pizza 주문 처리 로직
 * 1. 주문
 * 2. 피자 만들기 : 5초 소요
 * 3. 배달
 */
console.clear();

// promise타입으로 반환할 경우 await로 동기가능!
async function pizza(){
    let makePizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`피자 완성`);
            resolve();
        }, 2000)
    });

    console.log(`주문 ------> 완료`);
    
    console.log(`피자 만드는 중...`);
    
    await makePizza
            .then( (resolve) => { } )
            .catch();

    console.log(`배달 완료`);
}

pizza();
