// 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 작성
let result1 = filter([1,2,1,2,1,1,2,3,4,5,7,1,2,4,3,5,1,7]);
let result2 = filter(['홍길동','이순신','홍길동','이순신','김유신','홍길동']);

console.log(result1);
console.log(result2);

function filter(array){
    return new Set(array);
}

print(result1);
print(result2);

function print(result){
    for(const item of result) console.log(item);
}

// 구조 분해 할당
console.clear();
const getObject = () =>{
    return {
        name: '홍길동',
        addr: '서울',
        age: 10,
        job: '개발자'
    };
}

let { name, addr, age, job } = getObject();

const getObject2 = () => {
    return [1, 2, 3];
}

let [...numbers] = getObject2();
console.log(numbers);

// text리스트를 입력받아, 3글자 이상의 text이면 새로운 객체를 생성하여 반환
function textFilter(textlist) {
    return textlist.filter( (text) => text.length >= 3 );
}

let textlist = ['a','ab','abc','ad','abcd','abcde']
console.log(textlist);

let result = textFilter(textlist);
console.log(result);



// text리스트를 입력받아, 3글자 이상의 text이면 새로운 객체를 생성하여 반환
function textFilter2(textlist) {
    return textlist.filter( (text) => !(text.length >= 3) );
}

console.log(textlist);

let result3 = textFilter2(textlist);
console.log(result3);
