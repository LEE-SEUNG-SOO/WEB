/**
 * object :
 * - {}, 다양한 데이터 타입을 저장
 * - object literal 형식 { propery: value, ...}
 */

// 학생 성적 관리 프로그램
// object literal를 활용하여 학생 개인의 성적관리
const hong = {
    name: "홍길동",
    kor: 100,
    eng: 80,
    math: 70
};

console.log(hong);
console.log(`name : ${hong.name}`);
console.log(`kor  : ${hong.kor}`);
console.log(`eng  : ${hong.eng}`);
console.log(`math : ${hong.math}`);

hong.name = "홍홍홍";
console.log(hong);
delete hong.math; // 객체 삭제
console.log(hong);

