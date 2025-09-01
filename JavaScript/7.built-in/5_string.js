/**
 * String 문자열 클래스 메소드
 * - split(), slice(), charAt() ...
 */

let name = "홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name == sname);
console.log(sname == name);

let str = "Hello~ JavaScript World!!";
console.log(str.length);
console.log(str.charAt(0));
console.log("welcome to ".concat(str)); // 문자열 결합
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// 문자열 추출
console.log(str.substring(0,5)); // substring(시작주소, 종료주소) 종료주소 -1까지출력
console.log(str.slice(0, 5)); // slice(시작주소, 종료주소) 종료주소 -1까지출력
console.log(str.slice(5)); // slice(시작주소) 시작주소부터 끝까지 출력


// 문자열 공백 삭제
console.clear();
console.log("-------------문자열 공백-------------");

let text = '     Hello~ Java Script!!    ';
console.log(text);
console.log(text.trim());
console.log("-------------------------------------");
// 문자열 구분자를 이용하여 배열객체로 생성
let fruits = '사과, 레몬, 토마토, 오렌지, 키위';
let flist = fruits.split(',');
console.log(flist);

if(flist[1].trim() === '레몬'){
    console.log(flist[1]);
} else {
    console.log(flist[0]);
}