/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * - 배열.forEach(callbackFn);
 */

let fruits = new Array('🍎','🍑','🍒','🍇');

// fruits.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } );
fruits.forEach( (item) => console.log(item) );

console.log('변경전 : ',fruits);

// 🍒를 🍋으로 교체
fruits.forEach(
    (item, index, array)  => {
        if(item == '🍒'){
            array.splice(index, 1, '🍋');
        }
    }
)

console.log('변경후 : ',fruits);
