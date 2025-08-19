/**
 * 객체형
 * Class, Array([]), Object({})
 * Array형식 : [데이터, 데이터]
 * Object형식: {
 * 프로퍼티:데이터값,
 * 프로퍼티:데이터값,
 *  }
 */

let apple = null;
apple = { 
    // 'aname':"빨간사과",
    // 'color':"red",
    // 'price':1230,
    // 'imoji':'🍎'
    aname:"빨간사과",
    color:"red",
    price:1230,
    imoji:'🍎'
};

console.log(apple);
console.log("aname : ",apple.aname);

// orange 객체 정의 및 생성
let orange = { 
    'aname':"오렌지",
    'color':"orange",
    'price':1111,
    'imoji':'🍊'
};
console.log(orange);
console.log("aname : ",orange.aname);

// Array
let numbers = [1,2,3];
console.log(numbers[0]);

let fruits = [apple, orange];
console.log(fruits);
console.log(fruits[0].imoji);