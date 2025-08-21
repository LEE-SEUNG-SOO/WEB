/**
 * 클래스 정의시 필드(전역변수)는 생성자 함수에서 정의
 * 접근 제어가 필요한 필드는 #을 붙여 필드 영역에 정의
 */

class Person {
    #name;
    #empno;

    constructor(name, age, empno){
        this.#name = name;
        this.age = age;
        this.#empno = empno;
    }

    display = () => {
        console.log(this.#name, this.age, this.#empno);
    };
}

let hong = new Person('홍길동', 20, 1);
hong.display();
console.log(hong.name, hong.age);