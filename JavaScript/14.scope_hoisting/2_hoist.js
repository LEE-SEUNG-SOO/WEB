/**
 * 호이스팅 : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 */
console.clear();

function test1(){ // 호이스팅 작업이 선행 된다.
    console.log(`------> test1`);
}

// test2(); // 변수형 함수는 선언하기 전 미리 사용 불가(호이스팅 작업이 되지 않기때문)

// 변수형 함수
let test2 = () => { // 호이스팅 작업 X
    console.log(`------> test2`);
}

test3();

let test3 = function() {
    console.log(`------> test3`);
}