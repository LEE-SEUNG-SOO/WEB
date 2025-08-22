/**
 * 학생, 교수, 학부모, 직원 폼에 따른 클래스 생성
 * - 공통 입력값 : 성명, 나이, 주소 
 */

// Member 클래스 정의
class Member {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName = () => this.name;
    getAge = () => this.age;
    getAddress = () => this.address;

    setName = (name) => this.name = name;
    setAge = (age) => this.age = age;
    setAddress = (address) => this.address = address;
}

// 학생 클래스 정의
class Student extends Member {
    constructor(sno, name, age, address){
        super(name, age, address);
        this.sno = sno;
    }

    getSno = () => this.sno;
    setSno = (sno) => this.sno = sno;

    display = () => console.log(this.getSno(), this.getName(), this.getAge(), this.getAddress());
    
    makeObject = () => {
        return {
            'sno':this.sno,
            'name':this.name,
            'age':this.age,
            'address':this.address
        }
    }
}

// 교수 클래스 정의
class Professor extends Member {
    constructor(name, age, address, subject){
        super(name, age, address);
        this.subject = subject;
    }

    getSubject = () => this.subject;
    setSubject = (subject) => this.subject = subject;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSubject());
    makeObject = () => {
        return {
            'name':this.name,
            'age':this.age,
            'address':this.address,
            'subject':this.subject
        }
    }
}

// 학부모 클래스 정의
class Parent extends Member {
    constructor(name, age, address, cname){
        super(name, age, address);
        this.cname = cname;
    }

    getCname = () => this.cname;
    setCname = (cname) => this.cname = cname;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getCname());
    makeObject = () => {
        return {
            'name':this.name,
            'age':this.age,
            'address':this.address,
            'cname':this.cname
        }
    }
}

// 직원 클래스 정의
class Employee extends Member {
    constructor(name, age, address, department){
        super(name, age, address);
        this.department = department;
    }

    getDepartment = () => this.department;
    setDepartment = (department) => this.department = department;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getDepartment());
    makeObject = () => {
        return {
            'name':this.name,
            'age':this.age,
            'address':this.address,
            'department':this.department
        }
    }
}

/**
 * 라디오 버튼 이벤트 처리 함수
 */
function display(no) {
    // 전부 none으로 설정
    document.querySelector('#student').style.display = 'none';
    document.querySelector('#professor').style.display = 'none';
    document.querySelector('#parent').style.display = 'none';
    document.querySelector('#employee').style.display = 'none';

    // 선택한 값에 따라 표시
    switch(no){
        case '1':
            document.querySelector('#student').style.display = 'block';
            break;
        case '2':
            document.querySelector('#professor').style.display = 'block';
            break;
        case '3':
            document.querySelector('#parent').style.display = 'block';
            break;
        case '4':
            document.querySelector('#employee').style.display = 'block';
            break;  
    }
}

/**
 * Signup 버튼 이벤트 처리 함수
 */
function signupCheck(){
    let type = document.querySelector('input[type="radio"]:checked').value;
    let values = null;
    let member = null;
    let docRoot = null;

    switch(parseInt(type)){
        case 1:
            console.log('학생');
            // html의 student정보 취득
            docRoot = document.querySelector('#student');
            // 공통 항목 설정
            values = setCommonValue(docRoot);
            // 학번 설정
            let sno = docRoot.querySelector('#sno').value;
            // 클래스에 설정
            member = new Student(sno, values.name, values.age, values.address);
            break;
        case 2:
            console.log('교수');
            // html의 professor 취득
            docRoot = document.querySelector('#professor');
            // 공통 항목 설정
            values = setCommonValue(docRoot);
            // 강의과목 설정
            let subject = docRoot.querySelector('#subject').value;
            // 클래스에 설정
            member = new Professor(values.name, values.age, values.address, subject);
            break;
        case 3:
            console.log('학부모');
            // html의 Parent정보 취득
            docRoot = document.querySelector('#parent');
            // 공통 항목 설정
            values = setCommonValue(docRoot);
            // 자녀명 설정
            let cname = docRoot.querySelector('#cname').value;
            // 클래스에 설정
            member = new Parent(values.name, values.age, values.address, cname);
            break;
        case 4:
            console.log('직원');
            // html의 Parent정보 취득
            docRoot = document.querySelector('#employee');
            // 공통 항목 설정
            values = setCommonValue(docRoot);
            // 부서명 설정
            let department = docRoot.querySelector('#department').value;
            // 클래스에 설정
            member = new Employee(values.name, values.age, values.address, department);
            break;
        default:
            alert('잘못된입력');
    }

    //표시
    member.display();
    console.log(member.makeObject());
}

// 공통 항목 설정
function setCommonValue(docRoot){
    // 성명
    let name = docRoot.querySelector('#name').value;
    // 나이
    let age = docRoot.querySelector('#age').value;
    // 주소
    let address = docRoot.querySelector('#address').value;
    
    return { name, age, address };
}