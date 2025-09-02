// 숫자 증가 함수 
function increment() {
    let number = document.querySelector("#number").textContent;
    document.querySelector("#number").textContent = ++number;
}
// 숫자 감소 함수
function decrement() {
    let number = document.querySelector("#number").textContent;
    if(number > 0){
        document.querySelector("#number").textContent = --number;
    } else {
        alert("0이하 설정불가!!");
    }
}

// 숫자 증감 함수
function counter(flag){
    let number = document.querySelector("#number").textContent;

    // increment
    if(flag){
        document.querySelector("#number").textContent = ++number;  
    } 
    // decrement
    else {
        if(number > 0){
            document.querySelector("#number").textContent = --number;
        } else {
            alert("0이하 설정불가!!");
        }
    }
}