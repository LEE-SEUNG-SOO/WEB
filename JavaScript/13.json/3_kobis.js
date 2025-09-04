window.addEventListener('DOMContentLoaded', function() {
    showResult("20250901");
});

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    console.log(jsonData);
        
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

// key 
async function getAPI(sdate){
    let key = "0ce0f099bb0fe8a88795520e0107f4ef";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    return response.json();
};

async function showResult(sdate){
    let kobis = await getAPI(sdate);
    let kobisobj = kobis.boxOfficeResult;
    let mList = kobisobj.dailyBoxOfficeList;
    let posterList = [];
    for(const movie of mList){
        let poster = await searchMoviePoster(movie.movieNm, movie.openDt.split("-"));
        posterList.push(poster);
    }

    let output = `
        <div>
            <span>검색일 : </span>
            <input type="text" id="searchDt" placeholder="ex)20250101"></input>
            <button type="button" id="btnSearch">검색</button>
        </div>    
        <h3>박스 오피스 타입 : ${kobisobj.boxofficeType}</h3>
        <h3>일자 : ${kobisobj.showRange}</h3>
        
        <div style="display: flex; gap: 20px">
            <img src="${posterList[0]}" id="poster"></img>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>누적매출액</th>
                </tr>
                ${
                    // for..of 또는 map() 사용해야함. forEach X
                    mList.map( (movie, index) => `
                    <tr class="movieInfo" id = "${posterList[index]}">
                        <td>${movie.rank}</td>
                        <td>${movie.movieNm}</td>
                        <td>${movie.openDt}</td>
                        <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                    </tr>
                    `).join("") // 배열을 문자열로!
                }
            </table>
        </div>
        `;

    document.querySelector("#content").innerHTML = output;

    //event는 html이 만들어진 이후
    //검색 버튼 이벤트
    document.querySelector("#btnSearch").addEventListener('click', () => {
        let sdate = document.querySelector("#searchDt").value.trim();
        showResult(sdate);
    });

    let rows = document.querySelectorAll(".movieInfo");
    
    // 테이블 row별 마우스 이벤트
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            let imgURL = row.id;
            row.style.background = 'aqua';
            document.querySelector("#poster").src = imgURL;
        });
        row.addEventListener('mouseout',  () => {
            row.style.background = 'white';
        });
    });

}