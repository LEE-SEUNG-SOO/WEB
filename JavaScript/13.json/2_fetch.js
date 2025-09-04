window.addEventListener('DOMContentLoaded', function() {
    showResult();
});


async function getData(){
    let response = await fetch("./data.json")
    return response.json();
};

async function showResult(){
    let data = await getData();

    let output = `
        <h1>Fetch 함수 테스트</h1>
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