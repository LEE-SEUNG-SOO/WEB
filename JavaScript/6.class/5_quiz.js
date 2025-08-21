/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */
class Student {
    #name;
    #age;
    #addr;

    constructor(name, age, addr, emoji){
        this.#name = name;
        this.#age = age;
        this.#addr = addr;
        this.emoji = emoji;
    }

    setName = (name) => { this.#name = name; }
    setAge = (age) => { this.#age = age; }
    setAddr = (addr) => { this.#addr = addr; }
    setEmoji = (emoji) => { this.emoji = emoji; }

    getName = () => { return this.#name; }
    getAge = () => { return this.#age; }
    getAddr = () => { return this.#addr; }
    getEmoji = () => { return this.emoji; }

    display = () => {
        console.log(this.#name, this.#age, this.#addr, this.emoji)
    }
}

let hong = new Student('홍', 15, '강남', '🍔');
hong.display();

console.clear();

// dataList의 학생정보를 이용하여 objList를 생성
let dataList = [
    { name: '홍홍홍', age: 20, addr: '서울시', emoji:'🍕' }, 
    { name: '이이이', age: 18, addr: '부산시', emoji:'🍕' },
    { name: '최최최', age: 23, addr: '전남', emoji:'🍕' },
    { name: '김김김', age: 44, addr: '전북', emoji:'🍕' }
];

let objList = [];
for(let i = 0 ; i < dataList.length; i++){
    let obj = dataList[i];
    objList.push(new Student(obj.name, obj.age, obj.addr, obj.emoji));
    // objList.push(obj);
};
console.log(objList);