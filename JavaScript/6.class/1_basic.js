/**
 * 클래스 : 객체를 생성하기 위한 틀
 */

/**
 * class 클래스명 { 
 *      // 필드명
 *      // 생성자
 *      // 메소드명
 * }
 */

class Animal {
    // statci 변수, 상수
    static MAX_SIZE = 10;
    
    // 생성자
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }

    // 메소드
    display = () => {
        { console.log(this.name, this.emoji); }
    }
}

let dog = new Animal('해피','이모지');
dog.display();
console.log(dog);