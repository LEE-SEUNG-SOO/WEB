/**
 * setter, getter
 */

// 사원클래스 정의
// 사원번호(#), 사원명, 나이를 입력받아 객체를 생성하는 클래스 정의
class Employee {
    #empno;

    constructor(empno, name, age){
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    setEmpno = (empno) => { this.#empno = empno; }

    setName = (name) => { this.name = name; }

    setAge = (age) => { this.age = age; }

    getEmpno = () => { return this.#empno; }
    getName = () => { return this.name; }
    getAge = () => this.age; // { return } 생략 (한줄일때만)

    display = () => {
        console.log(this.#empno, this.name, this.age);
    }

    getObject = () => { 
        return {
            empno: this.#empno,
            name: this.name,
            age: this.age
        }
    }
}

let hong = new Employee('E0001', '홍길동', 20);
let park = new Employee('E0001', 'park', 10);
hong.display();
hong.setEmpno('E0002');
hong.setName('홍홍홍');
hong.setAge(11);
console.log('-------------------------');
console.log(hong.getEmpno(), hong.getName(), hong.getAge());

console.log('-------------------------');
console.log(hong.getObject());

let empList = [];
empList.push(hong.getObject());
empList.push(park.getObject());

console.log('-------------------------');
console.log(empList);
