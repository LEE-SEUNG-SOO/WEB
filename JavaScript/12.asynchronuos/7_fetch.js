/**
 * fetch : json파일을 호출하여 데이터를 가져오는 함수
 */
window.addEventListener('DOMContentLoaded', function() {
    showResult();
}) 

async function getJson(){
    let response = await fetch("./data.json");
    return response.json();
}

async function showResult(){
    // 1. getJson() 결과 가져오기
    let data = await getJson();

    // 2. output 변수에 html 코드 저장
    let output = `
        <table border=1>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>job</th>
            </tr>
            ${
                // for..of 또는 map() 사용해야함. forEach X
                data.map( item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.job}</td>
                </tr>
                `).join("") // 배열을 문자열로!
            }
        </table>
    `;
    console.log(output);

    // 3. innerHTML에 output 출력
    document.querySelector("#content").innerHTML = output;
}


// callback연습
// function getJson(){
//     fetch("./data.json")
//         .then( (response) => response.json())
//         .then( (jsonData) => {
//             console.log(jsonData); // 객체
//             console.log(JSON.stringify(jsonData)); // stringify 객체를 문자열로 변경
//             jsonData.forEach(obj => {
//                 console.log(obj.name, obj.age, obj.job);
//             });

//             let jsonData2 = JSON.parse(JSON.stringify(jsonData)); // parse 문자열을 객체로 변경
//             console.log(jsonData2);
            
//         } )
//         .catch();
// }

