/**
 * 객체를 생성하는 함수 : 생성자 함수
 * function을 사용해서 작성
 * 
 * 객체의 메소드 정의
 * : 함수를 정의하여 메소드 구현
 */

// const apple = (name, emoji) => {
//     this.name = name;
//     this.emoji = emoji;
// };

// 생성자 함수
function Apple(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
    }
};

let redApple = new Apple('사과', '🍎');
console.log(redApple);
apple('사과','🍎');

function apple(name, emoji) {
    console.log('aaaaaa');
};

console.log('----------------------')
// 메소드
const fruits = {
    name: 'apple',
    emoji: '🍎',

    display: function(){
        console.log(this.name, this.emoji);
    },

    getName: function(){
        return this.name;
    },

    getEmoji: function(){
        return this.emoji;
    }
}

console.log(fruits);
console.log(fruits.display);
fruits.display();
console.log(fruits.getName());
console.log(fruits.getEmoji);
