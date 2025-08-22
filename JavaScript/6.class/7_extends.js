/**
 * class간의 상속관계 표현
 * Animal클래스를 상속받아 Lion, Tiger, Dog 자식클래스 정의
 */

// Animal 부모 클래스
// Animal 클래스 속성 : name, color, emoji
// Animal 클래스 메소드 : display, sleep, eat
class Animal {
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => {
        console.log(this.name, this.color, this.emoji);
    }

    sleep = () => {
        console.log(this.name + '잔다');
    }

    eat = () => {
        console.log(this.name + '먹는다');
    }
}

// Animal의 자식 클래스 Dog 정의
class Dog extends Animal {
    constructor(name, color, emoji, age){
        super(name, color, emoji);
        this.age = age;
    }

    getAge = () => { return this.age; }
    setAge = (age) => { this.age = age; }

    // display = () => {
    //     console.log(this.name, this.color, this.emoji, this.age);
    // }
}

// Animal의 자식 클래스 Dog 정의
class Cat extends Animal {
    constructor(name, color, emoji, type){
        super(name, color, emoji);
        this.type = type;
    }

    getType = () => { return this.type; }
    setType = (type) => { this.type = type; }

}

let happy = new Dog('해피', 'brown', '🐶', 3);
happy.display();
happy.sleep();
happy.eat();
console.log(`${happy.name} age : ${happy.getAge()}`);


let smail = new Cat('스마일', 'yellow', '😺','페르시안');
smail.display();
smail.sleep();
smail.eat();
console.log(`${smail.name} type : ${smail.getType()}`);